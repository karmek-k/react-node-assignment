import { createSlice } from '@reduxjs/toolkit';
import { Task } from '../../interfaces/Task';

type InitialState = { tasks: Task[] };

const initialState: InitialState = {
  tasks: [
    {
      name: 'done task',
      done: true
    },
    {
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
    }
  }
});

export const { actions } = taskSlice;
export default taskSlice.reducer;
