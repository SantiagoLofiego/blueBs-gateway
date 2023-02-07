import { NextFunction, Request, Response } from "express";

export const addGateway = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("add");
};

export const removeGateway = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("deleted");
};
