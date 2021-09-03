import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TaskPickerOption from '../../enums/TaskPickerOption';
import { Task, TaskEntry } from '../../interfaces/Task';

type InitialState = {
  lastId: number;
  tasks: Task[];
  visibility: TaskPickerOption;
};

const initialState: InitialState = {
  lastId: 0,
  tasks: [],
  visibility: TaskPickerOption.ALL
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    clear: state => {
      state.tasks = [];
    },
    add: (state, action: PayloadAction<TaskEntry>) => {
      state.tasks.push({
        id: ++state.lastId,
        ...action.payload,
        done: false
      });
    },
    remove: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleDone: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find(task => task.id === action.payload);

      if (!task) {
        return;
      }

      task.done = !task.done;
    },
    setVisibility: (state, action: PayloadAction<TaskPickerOption>) => {
      state.visibility = action.payload;
    }
  }
});

export const { actions } = taskSlice;
export default taskSlice.reducer;
