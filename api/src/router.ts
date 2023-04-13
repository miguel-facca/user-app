// createUser
// listUser

import { Router } from 'express';
import { userController } from './controllers/UserController';

export const router = Router();

router.post('/user', userController.createUser);
router.get('/user', userController.listUsers);

