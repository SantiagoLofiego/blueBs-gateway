import { Microservice } from "../models/microservice.model";
import { ServiceInstance } from "../models/serviceInstance.model";
import MicroServiceRepositoryInterface from "../repositories/interfaces/MicroServiceRepositoryInterface";
import { validatePatch, validatePost } from "./validators/microservice.validator";

export type serviceInstanceDto = {
  serviceName: string,
  protocol: string,
  ip: string,
  port: string,
  status: string
}

export class MicroserviceService {
  private repository: MicroServiceRepositoryInterface;

  constructor(microserviceRepository: MicroServiceRepositoryInterface) {
    this.repository = microserviceRepository;
  }

  async getInstance(serviceName: string): Promise<Microservice> {
    const microservice = await this.repository.findByName(serviceName);
    if (!microservice) throw new Error(`Microservice ${serviceName} not found`);
    return microservice
  }

  async getAllServices() {
    return await this.repository.getAll();
  }

  async registerInstance(serviceName: string, instance: serviceInstanceDto): Promise<ServiceInstance> {
    validatePost(instance);
    const newInstace = this.toServiceInstace(instance);
    let microservice = await this.repository.findByName(serviceName)
    if (!microservice) {
      microservice = new Microservice(serviceName)
    }
    microservice.addInstance(newInstace);
    await this.repository.save(microservice);
    return newInstace;
  }

  async updateInstance(serviceName: string, id: string, data: { [key: string]: any }): Promise<ServiceInstance> {
    validatePatch(data);
    const microservice = await this.getInstance(serviceName);
    const updatedInstance = microservice.updateInstance(id, data);
    await this.repository.save(microservice);
    return updatedInstance
  }

  async removeInstance(serviceName: string, id: string) {
    const microservice = await this.getInstance(serviceName);
    microservice.removeInstance(id);
    await this.repository.save(microservice);
  }

  toServiceInstace(dto: serviceInstanceDto): ServiceInstance {
    return new ServiceInstance(
      dto.protocol,
      dto.ip,
      dto.port,
      ServiceInstance.statusFromString(dto.status))
  }
}
