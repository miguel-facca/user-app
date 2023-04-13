import { randomUUID } from 'node:crypto';

export const dataUsers = [
  { id: randomUUID() ,name: 'John', email: 'john@example.com' },
  { id: randomUUID() ,name: 'Cleiton', email: 'cleiton@example.com' },
  { id: randomUUID() ,name: 'Jobson', email: 'jobson@example.com' },
  { id: randomUUID() ,name: 'Robson', email: 'robson@example.com' },
];
