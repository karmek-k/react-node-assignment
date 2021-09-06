import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { Task, TaskEntry } from '../../interfaces/Task';

type InitialState = {
  lastId: number;
  tasks: Task[];
  count: number;
};

const initialState: InitialState = {
  lastId: 0,
  tasks: [],
  count: 0
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
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    }
  }
});

export const { actions } = taskSlice;
export default taskSlice.reducer;
