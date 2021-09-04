import { ConnectionOptions } from 'typeorm';
import Task from '../models/Task';

export const dbConfig: ConnectionOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL!,
  entities: [Task]
};
