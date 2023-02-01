import {Request, Response, NextFunction} from 'express'


export class UserController{
    service:UserService;

    constructor(){
        this.service=new UserService();
    }
    
    findUser = async (req: Request<{ userName:string}>, res:Response, next:NextFunction) =>{
        try {
            const { userName } = req.params;
            const user = await this.service.findOne(userName);
            res.json(user);
        } catch (error) {
          next(error);
        }
    }
    
}
