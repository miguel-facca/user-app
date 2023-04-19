import { Router } from 'express';
import UserController from './controllers/UserController';

export const routes = Router();

routes.post('/user', UserController.create);
routes.get('/user', UserController.index);
