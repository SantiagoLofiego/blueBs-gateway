import { Method } from "axios";
import { NextFunction, Request, Response } from "express";

export const getGateway = async (
  req: Request<{
    method: Method;
    body?: any;
    apiName: String;
  }>,
  res: Response,
  next: NextFunction
) => {
  const method = req.method;
  const { apiName } = req.params;

  return res.send(`${method}- ${apiName} `);
};

export const removeGateway = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("deleted");
};
