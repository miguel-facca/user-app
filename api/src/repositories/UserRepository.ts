import { User } from '../database/entity/User';
import { AppDataSource } from '../database/data-source';

const dataSource = AppDataSource.getRepository(User);

class UserRepository{
  async index(){
    const users = await dataSource.find();

    return users;
  }

  async create({ id, firstName, lastName, email }: User){
    const newUser = new User();

    newUser.id = id;
    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;

    await dataSource.save(newUser);
  }
}



export default new UserRepository();
