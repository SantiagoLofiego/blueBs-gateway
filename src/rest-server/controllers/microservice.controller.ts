import { Request, Response, NextFunction } from "express";
import { Microservice } from "../../domain/models/microservice.model";
import { MicroServiceService } from "../../domain/services/microService.service";
let service: MicroServiceService = new MicroServiceService();

export interface TypedRequestBody<T> extends Request {
  body: T
}

export const addMicroservice = async (
  req: TypedRequestBody<Microservice>,
  res: Response,
) => {
  try {
    const microservice: Microservice = req.body;
    const added: boolean = service.addService(microservice);
    if (added) {
      res.status(201).json({
        status: 'success',
        Response: microservice
      });
    } else {
      res.status(400).json({
        status: 'failed'
      });
    }
  } catch (error) {
    console.error(error);
  };
};

export const removeMicroservice = async (
  req: Request<{ service: ServiceInstance }>,
  res: Response
) => {
  try {
    let serviceToAdd = req.params.service;
    await service.remove(serviceToAdd);
    return res.json(serviceToAdd);
  } catch (error) {
    res.json(404)
  }
};

export const getServiceUrl = (
  req: Request<{ serviceName: string }>,
  res: Response
) => {
  try {
    const serviceName: string = req.params.serviceName;
    console.log(serviceName);
    const microservice = service.getService(serviceName);
    return res.status(200).json({ 
      status: 'OK',
      microservice
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      data: error
    });
  }
};

export const getAllMicroservices = async (
  req: Request,
  res: Response,
) => {
  try {
    const data = service.getAllServices();
    res.status(200).json({
      status: 'OK',
      results: data.length,
      data
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      data: err
    });
  }
}

export const registerInstance = async (
  req: Request,
  res: Response,
) => {
  try {
    let newServiceInstance = req.body;
    console.log("LLEGA A CONTROLLER: ");

    const data = service.register(newServiceInstance);
    res.status(200).json({
      status: 'OK',
      data
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      data: err
    });
  }
}
