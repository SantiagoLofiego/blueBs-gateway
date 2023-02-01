const boom = require('@hapi/boom'); // Es un manejador de errorres

class UserService {
    
    constructor(){};

    async findOne(id) {
        const user = await models.User.findByPk(id);
        if(!user){
          boom.notFound('user not found');
        }
        return user;
      }
}