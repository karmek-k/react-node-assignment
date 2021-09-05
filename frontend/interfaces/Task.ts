export interface TaskEntry {
  name: string;
}

export interface Task extends TaskEntry {
  id: number;
  done: boolean;
}

export interface TaskListResponse {
  tasks: Task[];
}

export interface TaskCreateResponse {
  task: Task;
}

export interface TaskSetDoneResponse {
  task: Task;
}

export interface TaskDeleteResponse {}
