import {
  TaskCreateResponse,
  TaskDeleteResponse,
  TaskEntry,
  TaskListResponse,
  TaskSetDoneResponse
} from '../interfaces/Task';
import api from '../utils/api';

export const listTasks = async () => {
  const { data } = await api.get<TaskListResponse>('/task');

  return data.tasks;
};

export const createTask = async (task: TaskEntry) => {
  const { data } = await api.post<TaskCreateResponse>('/task', { task });

  return data.task;
};

export const setDoneTask = async (id: number, done: boolean) => {
  const { data } = await api.put<TaskSetDoneResponse>(`/task/${id}`, {
    id,
    done
  });

  return data.task;
};

export const deleteTask = async (id: number) => {
  const { data } = await api.delete<TaskDeleteResponse>(`/task/${id}`);
};
