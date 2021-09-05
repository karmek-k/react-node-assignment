import {
  Task,
  TaskCreateResponse,
  TaskDeleteResponse,
  TaskListResponse,
  TaskSetDoneResponse
} from '../interfaces/Task';
import api from '../utils/api';

export const listTasks = async () => {
  const { data } = await api.get<TaskListResponse>('/tasks');

  return data;
};

export const createTask = async (task: Task) => {
  const { data } = await api.post<TaskCreateResponse>('/tasks', { task });

  return data;
};

export const setDoneTask = async (id: number, done: boolean) => {
  const { data } = await api.put<TaskSetDoneResponse>(`/tasks/${id}`, {
    id,
    done
  });

  return data;
};

export const deleteTask = async (id: number) => {
  const { data } = await api.delete<TaskDeleteResponse>(`/tasks/${id}`);

  return data;
};
