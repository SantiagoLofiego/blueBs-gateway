const boom = require("@hapi/boom"); // Es un manejador de errorres
const fs = require('fs');
import { Microservice } from "../models/microservice.model";
import { MicroServiceRepository } from "./../../data/microservices/MicroServiceRepository";

export class MicroServiceService {
  microServiceRepository = new MicroServiceRepository();
  constructor() {}

  addService(service: Microservice): boolean {
    return this.microServiceRepository.add(service);
  }

  register(instance:ServiceInstance):void{        
    this.microServiceRepository.register(instance);
  }

  remove(serviceInstance: ServiceInstance) {   
    return this.microServiceRepository.remove(serviceInstance);
   }

  update(serviceInstance: ServiceInstance){
    return this.microServiceRepository.update(serviceInstance);
  }

  getService(serviceName: string): Microservice {
    return this.microServiceRepository.find(serviceName);
  }

  getAllServices(){
    return this.microServiceRepository.getAll();
  }
}
