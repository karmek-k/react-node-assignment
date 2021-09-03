import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskEntry } from '../../interfaces/Task';

type InitialState = {
  lastId: number;
  tasks: Task[];
};

const initialState: InitialState = {
  lastId: 2,
  tasks: [
    {
      id: 1,
      name: 'done task',
      done: true
    },
    {
      id: 2,
      name: 'undone task',
      done: false
    }
  ]
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
    }
  }
});

export const { actions } = taskSlice;
export default taskSlice.reducer;
