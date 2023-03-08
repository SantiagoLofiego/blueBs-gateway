import axios, { AxiosError, Method } from "axios";
import { NextFunction, Request, Response } from "express";
import context from "../../config/context";
import { MicroserviceService } from "../../domain/services/microService.service";

const service = context.get<MicroserviceService>('MicroserviceService');
export const dispatcher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const method = req.method;
  const body = req.body;
  const { serviceName } = req.params;
  const headers = req.headers;
  try {
    const destination = await getDestination(serviceName, req.protocol, req.hostname, req.originalUrl);
    console.log(destination)
    const options = {
      method: method,
      url: destination,
      data: body,
      timeout: 10000
    }
    console.log(options)
    const response = await axios(options)
    console.log(response.data)
    res.status(response.status).send(response.data
    )
  } catch (error) {
    const axiosError = error as AxiosError
    console.log(axiosError.message)
    if (axiosError.isAxiosError) {
      res.status(axiosError.response?.status || 504)
        .send(axiosError.response?.data || axiosError.message)
    } else {
      res.status(404)
        .json({
          status: 'fail',
          error: (error as Error).message
        })
    }

  }
};
async function getDestination(serviceName: string, oProtocol: string, oHost: string, oUrl: string) {
  try {
    const microservice = await service.getInstance(serviceName);
    const newPath = getDest(oUrl);
    const instance = microservice.instances[0];
    const host = `${instance.protocol}://${instance.ip}:${instance.port}`;
    const destination = `${host}/${newPath}`
    return destination;
  } catch (error) {
    throw new Error('There is no server available for the service')
  }
}


const getDest = (url: string) => {
  const match = url.match(/(\/[\w]+\/[\w]+)\/(?<dest>.*)/)
  const path = (match?.groups?.dest);
  return path
}
