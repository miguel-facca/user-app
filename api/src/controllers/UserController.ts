import { Request, Response } from 'express';
import { userRepository } from '../repositories/UserRepository';
import { randomUUID } from 'node:crypto';

export class UserControler{
  async index(request: Request, response: Response){
    const users = await userRepository.index();

    response.json(users);
  }

  async create(request:  Request, response: Response){
    const { firstName, lastName, email } =  request.body;
    const id = randomUUID();

    if(firstName && lastName && email){
      await userRepository.create({id, firstName, lastName, email});

      response.status(201).json({email, message: 'has been created'});
      return;
    }

    response.status(400).json({error: 'missing required parameter'});
  }
}

const userController = new UserControler();

export { userController };
