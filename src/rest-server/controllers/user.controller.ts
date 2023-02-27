import { Request, Response, NextFunction } from "express";
import { UserService } from "../../domain/services/user.service";

const service = new UserService();

export const findUser = async (
    req: Request<{ username: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { username } = req.params;
      const user = service.findByUsername(username);
     
      res.status(200).json({
        status: "Datos recuperados correctamente",
        user
      });
    } catch (error) {
      let response
      if (error instanceof Error) response = error.message;
      else response = String(error);
      res.status(404).json({
        status: 'fail',
        response
      });
    }
  }

  
export const findAll = (
  req: Request,
  res: Response,
) => {
  try {      
    const data = service.findAll();
    res.status(200).json({
      status: "Datos recuperados correctamente",
      data
    });
  } catch (error) {
    let response
    if (error instanceof Error) response = error.message;
    else response = String(error);
    res.status(404).json({
      status: 'fail',
      response
    });
  }
}
