import { Router } from 'express';
import { userController } from './controllers/UserController';

export const routes = Router();

routes.post('/user', userController.create);
routes.get('/user', userController.index);
