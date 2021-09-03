export interface TaskEntry {
  name: string;
}

export interface Task extends TaskEntry {
  id: number;
  done: boolean;
}
