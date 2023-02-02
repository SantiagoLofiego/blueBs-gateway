//const boom = require('@hapi/boom'); // Es un manejador de errorres

class UserService {

    //repository:UserRepository;

    constructor(){};

    async findOne(userName:string) {
       // const user = await this.repository.findUserByUsername(userName);
       const user = "prueba" 
       if(!user){
          boom.notFound('user not found');
        }
        return user;
      }
}