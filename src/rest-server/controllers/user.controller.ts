import { Request, Response, NextFunction } from "express";
import { UserService } from "../../domain/services/user.service";

export class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  findUser = async (
    req: Request<{ username: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { username } = req.params;
      //const user = await this.service.findOne(username);
      //res.json(user);
      return res.send(username);
    } catch (error) {
      next(error);
    }
  };
}
