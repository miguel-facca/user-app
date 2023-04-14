import express from 'express';
import { router } from './router';

const app = express();

const port = 3001;

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`🔥 Server running on http://localhost:${port}`);
});
