import { Request, Response } from 'express';
import { userRepository } from '../repositories/UserRepository';

export class UserControler{
  createUser(request:  Request, response: Response){
    const { name, email } =  request.body;

    const userExists = userRepository.userExists(email);

    if(userExists){
      return response.status(400).json({message: 'User already exists'});
    }

    userRepository.create({name, email});

    response.status(201).json({name, email});
  }

  listUsers(request: Request, response: Response){
    const users = userRepository.index();

    response.json(users);
  }
}

const userController = new UserControler();

export { userController };
