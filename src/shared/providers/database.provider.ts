import { PG_CONNECTION } from '../constants';
import { Pool } from 'pg';

export const databaseProvider = {
  provide: PG_CONNECTION,
  useValue: new Pool({
    host: 'localhost',
    database: 'advertexam',
    password: '1234',
    user: 'postgres',
    port: 5432,
  }),
};
