import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
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
    add: (state, action: PayloadAction<TaskEntry>) => {
      state.tasks.push({
        id: ++state.lastId,
        ...action.payload,
        done: false
      });
    },
    addFromApi: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
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

      const doneTasks = current(state.tasks).filter(task => task.done);
      console.log(doneTasks);
    },
    setVisibility: (state, action: PayloadAction<TaskPickerOption>) => {
      state.visibility = action.payload;
    }
  }
});

export const { actions } = taskSlice;
export default taskSlice.reducer;
