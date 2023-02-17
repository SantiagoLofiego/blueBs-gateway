import { Microservice } from "../../models/microservice.model";

interface MicroServiceRepositoryInterface{
    add(microService:Microservice):boolean;
    find(serviceName:string):void;
    register(instance:ServiceInstance):void;
    update(instance:ServiceInstance):ServiceInstance;
    remove(instance:ServiceInstance):ServiceInstance;
}

export default MicroServiceRepositoryInterface;