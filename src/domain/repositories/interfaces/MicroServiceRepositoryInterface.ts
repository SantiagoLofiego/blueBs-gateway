import { Microservice } from "../../models/microservice.model";
import { ServiceInstance } from "../../models/serviceInstance.model";

interface MicroServiceRepositoryInterface{
    save(microService:Microservice):Promise<void>;
    findByName(serviceName:string):Microservice;
   // update(microService: Microservice):Promise<void>;
    remove(microService:Microservice):Promise<void>;
}

export default MicroServiceRepositoryInterface;