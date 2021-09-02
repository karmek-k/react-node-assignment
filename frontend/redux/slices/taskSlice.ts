import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
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
  },
  reducers: {
    clear: state => {
      state.tasks = [];
    }
  }
});

export const { actions } = taskSlice;
export default taskSlice.reducer;
