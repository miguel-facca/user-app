import { UserType } from '../types/User';
import { dataUsers } from '../mocks/users';
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
    const exists = dataUsers.some(user => user.email === email);

    return exists;
  }
}

const userRepository = new UserRepository();

export { userRepository };
