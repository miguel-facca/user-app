import { AppDataSource } from './data-source';

export function startConnection(){
  AppDataSource.initialize()
    .then(() => {
      console.log('📁 Database connection established!');
    })
    .catch((error) => console.log(error));
}


