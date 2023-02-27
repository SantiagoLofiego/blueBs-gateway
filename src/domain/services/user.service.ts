import { UserRepository } from "../../data/users/userRepository";
import { User } from "../models/user.model";

// const boom = require("@hapi/boom"); // Es un manejador de errorres

export class UserService {
  repository = new UserRepository();
  constructor() {}

  findByUsername(username: string) {
    const user = this.repository.findByUserName(username);
    if (user){
      return user;
    }else{
      throw new Error("Usuario no encontrado!");
    }
 } 

  findAll():User[]{
    return this.repository.findAll();
  }
}