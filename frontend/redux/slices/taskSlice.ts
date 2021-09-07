import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { Task, TaskEntry } from '../../interfaces/Task';

type InitialState = {
  lastId: number;
  tasks: Task[];
  count: number;
  doneTasks: Task[];
};

const initialState: InitialState = {
  lastId: 0,
  tasks: [],
  count: 0,
  doneTasks: []
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

      // add the task to doneTasks if it's done,
      // otherwise remove it
      if (task.done) {
        state.doneTasks.push(task);
      } else {
        const indexToRemove = state.doneTasks.indexOf(task);
        state.doneTasks.splice(indexToRemove, 1);
      }

      console.log(current(state.doneTasks));
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setDoneTasks: (state, action: PayloadAction<Task[]>) => {
      state.doneTasks = action.payload;
    }
  }
});

export const { actions } = taskSlice;
export default taskSlice.reducer;
