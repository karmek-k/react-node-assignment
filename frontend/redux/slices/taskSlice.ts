import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskEntry } from '../../interfaces/Task';

type InitialState = {
  lastId: number;
  tasks: Task[];
};

const initialState: InitialState = {
  lastId: 0,
  tasks: []
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
    }
  }
});

export const { actions } = taskSlice;
export default taskSlice.reducer;
