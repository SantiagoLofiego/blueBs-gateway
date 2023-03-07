import { Request, Response, NextFunction } from "express";
import { MicroserviceService } from "../../domain/services/microService.service";
import context from "../../config/context";

const service = context.get<MicroserviceService>('MicroserviceService');


export const getInstance = async (
  req: Request<{ serviceName: string }>,
  res: Response
) => {
  try {
    const serviceName: string = req.params.serviceName;
    const microservice = await service.getInstance(serviceName);
    res.status(200).json({
      status: 'OK',
      microservice
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
};

export const getAllMicroservices = async (
  req: Request,
  res: Response,
) => {
  try {
    const data = await service.getAllServices();
    res.status(200).json({
      status: 'OK',
      results: data.length,
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

export const registerInstance = async (
  req: Request,
  res: Response,
) => {
  try {
    const data = await service.registerInstance(req.params.serviceName, req.body);

    res.status(202).json({
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

export const updateInstance = async (
  req: Request,
  res: Response,
) => {
  try {
    const data = await service.updateInstance(req.params.serviceName, req.params.id, req.body);
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

export const deleteInstance = async (
  req: Request,
  res: Response,
) => {
  try {
    await service.removeInstance(req.params.serviceName, req.params.id);
    res.status(200).json({
      status: "Instancia eliminada correctamente",
      data: null
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
