import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../database/entity/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'testdb',
  synchronize: true,
  logging: true,
  entities: [User],
  migrations: ['./migration/*.ts']
});
