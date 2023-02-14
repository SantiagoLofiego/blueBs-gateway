import { Method } from "axios";
import { NextFunction, Request, Response } from "express";

export const dispatcher = async (
  req: Request<{ method: Method; apiName: String }>,
  res: Response,
  next: NextFunction
) => {
  const method = req.method;
  const body = req.body;
  const { apiName } = req.params;

  return res.send(`${method}- ${apiName} `);
};
