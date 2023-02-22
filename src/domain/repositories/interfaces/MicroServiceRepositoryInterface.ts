import { Microservice } from "../../models/microservice.model";

interface MicroServiceRepositoryInterface{
    add(microService:Microservice):boolean;
    find(serviceName:string):Microservice;
    register(instance:ServiceInstance):void;
    update(instance:ServiceInstance):void;
    remove(instance:ServiceInstance):void;
}

export default MicroServiceRepositoryInterface;