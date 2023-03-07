import fs from "fs"
import config from "../../config";
import MicroServiceRepositoryInterface from "../../domain/repositories/interfaces/MicroServiceRepositoryInterface";
import { Microservice } from './../../domain/models/microservice.model';
import { ServiceInstance, STATUS } from './../../domain/models/serviceInstance.model';

const path = config.data.microService.file.filePath;
const data: ServicesData = getFile();

function getFile(): ServicesData {
  try {
    const file = JSON.parse((fs.readFileSync(path)).toString())
    if ((file as ServicesData).services != undefined) {
      return file;
    } else {
      throw new Error('File is not a services file ')
    }
  } catch (error) {
    console.log((error as Error).message, 'New File was created')
    const newData = { services: {} };
    fs.writeFileSync(path, JSON.stringify(newData));
    return newData;
  }
}

type ServiceInstanceEntity = {
  id: string;
  protocol: string;
  ip: string;
  port: string;
  url: string;
  status: STATUS
}

type MicroServiceEntity = {
  serviceName: string,
  instances: ServiceInstanceEntity[]
}

type ServicesData = { services: { [key: string]: MicroServiceEntity } };



export class MicroServiceRepository implements MicroServiceRepositoryInterface {
  constructor() { }

  async remove(serviceName: string): Promise<void> {
    delete data.services[serviceName];
    return fs.promises.writeFile(path, JSON.stringify(data));
  }

  async save(microService: Microservice): Promise<void> {
       data.services[microService.serviceName] = microService
    return fs.promises.writeFile(path, JSON.stringify(data))
  }

  async findByName(serviceName: string): Promise<Microservice | null> {
    const microserviceEntity = data.services[serviceName];
    if (microserviceEntity) {
      return this.toMicroservice(microserviceEntity);
    } else {
      return null;
    }
  }

  async getAll(): Promise<Microservice[]> {
    const services = Object.entries(data.services).map(el=> this.toMicroservice(el[1]))
    return services;
  }

  toMicroservice(microservice: MicroServiceEntity): Microservice {
    const instances = microservice.instances
      .map(el => new ServiceInstance( el.protocol, el.ip, el.port, el.status));
    return new Microservice(microservice.serviceName, instances);
  }

}
