import express from 'express';
import { routes } from './router';
import { startConnection } from './database/connection';

const app = express();

const port = 3001;

startConnection();

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`🔥 Server running on http://localhost:${port}`);
});
