import { ConnectionOptions } from 'typeorm';

export const dbConfig: ConnectionOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL!,
  entities: []
};
