const jwt = require('jsonwebtoken') 
import config from "./../../config";

import { UserRepository } from "../../data/users/userRepository";
import { User } from "../models/user.model";

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

  checkCredentials(username:string, password:string):string{
    const check = this.repository.checkCredentials(username,password);
    console.log(check);
    
    if(check){
      return this.jwtSign(username);
    }else{
      return ""
    }

  }

  jwtSign(username:string):string{
    const jwtSecret = config.jwt.JWT_SECRET;    
    const jwtExpires = config.jwt.JWT_EXPIRES_IN;
    const token = jwt.sign({username:username}, jwtSecret, {expiresIn:jwtExpires});
    return token;
  }
}