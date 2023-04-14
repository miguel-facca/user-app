import { UserType } from '../types/User';
import { randomUUID } from 'crypto';

class UserRepository{
  index(){
    return dataUsers;
  }

  create({ name, email } : UserType){
    const id = randomUUID();

    dataUsers.push({ id, name, email });
  }

  userExists(email: string){

    return exists;
  }
}

const userRepository = new UserRepository();

export { userRepository };
