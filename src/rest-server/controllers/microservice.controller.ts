import { Request, Response, NextFunction } from "express";
import { MicroServiceService } from "../../domain/services/microService.service";

let service: MicroServiceService = new MicroServiceService();

export const addMicroservice = async (
  req: Request<{ service: ServiceInstance }>,
  res: Response,
  next: NextFunction
) => {
  try {
    let serviceToAdd = req.params.service;
    await service.add(serviceToAdd);
    return res.json(serviceToAdd);
  } catch (error) {
    next(error);
  }
};

export const removeMicroservice = async (
  req: Request<{ service: ServiceInstance }>,
  res: Response,
  next: NextFunction
) => {
  try {
    let serviceToAdd = req.params.service;
    await service.remove(serviceToAdd);
    return res.json(serviceToAdd);
  } catch (error) {
    next(error);
  }
};

export const getServiceUrl = (
  req: Request<{ serviceName: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const serviceName: string = req.params.serviceName;
    const serviceInstance = service.getService(serviceName);
    return res.json(serviceInstance);
  } catch (error) {
    next(error);
  }
};
