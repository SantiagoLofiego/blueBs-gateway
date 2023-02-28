import { User } from "../../models/user.model";

interface UserRepositoryInterface{
    findByUserName(username:string):User;
    findAll():User[];
    checkCredentials(username:string, password:string):boolean;
}

export default UserRepositoryInterface;