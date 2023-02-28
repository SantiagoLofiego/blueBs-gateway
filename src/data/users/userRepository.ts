import UserRepositoryInterface from "./../../domain/repositories/interfaces/userRepositoryInterface"
import { User } from "../../domain/models/user.model";

const fs = require('fs');//fs para leer los archivos json de prueba
const data = fs.readFileSync(`${__dirname}/../../../users.json`, 'utf-8').toString();
const dataObj:User[] = JSON.parse(data);

export class UserRepository implements UserRepositoryInterface {
    constructor(){}

    findByUserName(username: string): User {
        const users = dataObj.filter((user)=>{
            return user.username == username;
        })
        return users[0];
    }

    findAll():User[]{
        return dataObj;
    }

    checkCredentials(username:string, password:string):boolean{
        const user:User = this.findByUserName(username);
        if(user){
            return (user.username==username && user.password==password) ? true : false;
        }
        else{
            throw new Error("No existe el usuario!");            
        }        
    }
}