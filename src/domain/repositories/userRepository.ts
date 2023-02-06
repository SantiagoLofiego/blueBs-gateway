import UserRepositoryInterface from "./interfaces/userRepositoryInterface";

const fs = require('fs');//fs para leer los archivos json de prueba

  

class UserRepository implements UserRepositoryInterface{
    private geUsersFromArchive():User[]{
        return [new User(123,"dasdas","dasda")]; //Harcodeado solo para que no de error, hay que cambiarlo
    }

    findByUserName(username: string): User {
        throw new Error("Method not implemented.");
    }
    
}