import { Request, Response } from 'express';
import { randomUUID } from 'node:crypto';

import UserRepository from '../repositories/UserRepository';

class UserControler{
  async index(request: Request, response: Response){
    const users = await UserRepository.index();

    response.json(users);
  }

  async create(request:  Request, response: Response){
    const { firstName, lastName, email } =  request.body;
    const id = randomUUID();

    if(firstName && lastName && email){
      await UserRepository.create({id, firstName, lastName, email});

      response.status(201).json({email, message: 'has been created'});
      return;
    }

    response.status(400).json({error: 'missing required parameter'});
  }
}

export default new UserControler();
