export interface TaskEntry {
  name: string;
}

export interface Task extends TaskEntry {
  id: number;
  done: boolean;
}

export interface TaskListResponse {
  tasks: Task[];
  count: number;
}

export interface TaskCreateResponse {
  task: Task;
}

export interface TaskToggleDoneResponse {
  task: Task;
}

export interface TaskDeleteResponse {}

export interface TaskGenerateResponse {}
