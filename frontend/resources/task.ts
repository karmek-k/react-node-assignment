import {
  TaskCreateResponse,
  TaskDeleteResponse,
  TaskEntry,
  TaskGenerateResponse,
  TaskListResponse,
  TaskToggleDoneResponse
} from '../interfaces/Task';
import api from '../utils/api';

export const listTasks = async (page: number) => {
  const { data } = await api.get<TaskListResponse>(`/task?page=${page}`);

  return data.tasks;
};

export const createTask = async (task: TaskEntry) => {
  const { data } = await api.post<TaskCreateResponse>('/task', {
    name: task.name
  });

  return data.task;
};

export const toggleDoneTask = async (id: number) => {
  const { data } = await api.put<TaskToggleDoneResponse>(`/task/${id}`, {
    id
  });

  return data.task;
};

export const deleteTask = async (id: number) => {
  await api.delete<TaskDeleteResponse>(`/task/${id}`);
};

export const generateTasks = async (count: number) => {
  await api.post<TaskGenerateResponse>('/task/generate', {
    count
  });
};
