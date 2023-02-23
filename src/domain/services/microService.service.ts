const boom = require("@hapi/boom");
import { Microservice } from "../models/microservice.model";
import { MicroServiceRepository } from "./../../data/microservices/MicroServiceRepository";
import { ServiceInstance } from "../models/serviceInstance.model";

export class MicroServiceService {
  microServiceRepository = new MicroServiceRepository();
  constructor() { }

  // addService(service: Microservice): boolean {
  //   return this.microServiceRepository.add(service);
  // }

  register(serviceName: string, ip: string, port: string, status: string): void {

    let newInstance: ServiceInstance = new ServiceInstance(serviceName, ip, port, status);

    let microservice = this.microServiceRepository.findByName(serviceName);

    if (microservice) {//Si existe el microservicio
      const instanceIndex: number = this.indexOfInstance(microservice, newInstance);
      if (instanceIndex < 0) {
        microservice.instances.push(newInstance);
        this.microServiceRepository.save(microservice);
      } else {
        //ver que devolver si ya existía la instancia
        throw new Error("No se puede guardar la instancia porque ya se encuentra registrada");
      }
    } else { //Si no existe el microservicio lo inicializo con la nueva instancia y lo guardo       
      microservice = new Microservice(serviceName, [newInstance]);
      this.microServiceRepository.save(microservice);
    }
  }

  remove(serviceName: string, ip: string, port: string, status: string) {
    let instanceToRemove: ServiceInstance = new ServiceInstance(serviceName, ip, port, status);
    let microservice = this.microServiceRepository.findByName(serviceName);
    if(microservice){//Si existe el microservicio que contiene la instancia
      const indexToRemove = this.indexOfInstance(microservice,instanceToRemove)
      if( (microservice.instances.length==1) && indexToRemove>=0){//Si el microservicio tiene solo esa instancia
        this.microServiceRepository.remove(microservice); 
      }else{
        const instanceDeleted = microservice.instances.splice(indexToRemove,1);
        let microserviceToRemove = new Microservice(serviceName,instanceDeleted);
        this.microServiceRepository.save(microserviceToRemove);
      }
    }else{
      throw new Error("No se puede remover la instancia porque no se encuentra registrado el microservicio");
    }
  }

  update(serviceName: string, ip: string, port: string, status: string) {
    let newInstance: ServiceInstance = new ServiceInstance(serviceName, ip, port, status);

  }

  getService(serviceName: string): Microservice {
    return this.microServiceRepository.findByName(serviceName);
  }

  getAllServices() {
    return this.microServiceRepository.getAll();
  }

  indexOfInstance(microservice: Microservice, newInstance: ServiceInstance): number {
    let encontrado: boolean = false;
    let i: number = 0;
    let posicionEncontrada: number = 0;
    microservice.instances.forEach(element => {
      if(newInstance.equals(element)){
        (encontrado = true); 
        posicionEncontrada=i;
      }else{
        i++;
      }
    });
    return encontrado ? posicionEncontrada : -1;
  }

}
