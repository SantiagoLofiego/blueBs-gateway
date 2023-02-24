import { Request, Response, NextFunction } from "express";
import { Microservice } from "../../domain/models/microservice.model";
import { MicroServiceService } from "../../domain/services/microService.service";
import { ServiceInstance } from "../../domain/models/serviceInstance.model";

let service: MicroServiceService = new MicroServiceService();

export interface TypedRequestBody<T> extends Request {
  body: T
}

// export const addMicroservice = async (
//   req: TypedRequestBody<Microservice>,
//   res: Response,
// ) => {
//   try {
//     const microservice: Microservice = req.body;
//     const added: boolean = service.save(microservice);
//     if (added) {
//       res.status(201).json({
//         status: 'success',
//         Response: microservice
//       });
//     } else {
//       res.status(400).json({
//         status: 'failed'
//       });
//     }
//   } catch (error) {
//     console.error(error);
//   };
// };

// export const removeMicroservice = (
//   req: Request<{ service: ServiceInstance }>,
//   res: Response
// ) => {
//   try {
//     let serviceToAdd = req.params.service;
//     service.remove(serviceToAdd);
//     return res.json(serviceToAdd);
//   } catch (error) {
//     res.json(404)
//   }
// };

export const getServiceUrl = (
  req: Request<{ serviceName: string }>,
  res: Response
) => {
  try {
    const serviceName: string = req.params.serviceName;
    console.log(serviceName);
    const microservice = service.getService(serviceName);
    res.status(200).json({
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

export const registerInstance = (
  req: Request,
  res: Response,
) => {
  try {
    const serviceName = req.body.serviceName;
    const ip = req.body.ip;
    const port = req.body.port;
    const status = req.body.status;
    const data = service.register(serviceName, ip, port, status);

    res.status(200).json({
      status: 'OK',
      data
    })
  } catch (error) {
    let response
    if (error instanceof Error) response = error.message;
    else response = String(error);

    res.status(404).json({
      status: 'Fail',
      response
    });
  }
}

export const updateInstance = (
  req: Request,
  res: Response,
) => {
  try {
    const serviceName = req.body.serviceName;
    const ip = req.body.ip;
    const port = req.body.port;
    const status = req.body.status;

    const data = service.update(serviceName, ip, port, status);
    res.status(200).json({
      status: 'OK Instancia actualizada correctamente',
      data: data
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

export const deleteInstance = (
  req: Request,
  res: Response,
) => {
  try {
    const serviceName = req.body.serviceName;
    const ip = req.body.ip;
    const port = req.body.port;
    const status = req.body.status;
      
    const data = service.remove(serviceName, ip, port, status);
    res.status(200).json({
      status: "Instancia eliminada correctamente",
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
