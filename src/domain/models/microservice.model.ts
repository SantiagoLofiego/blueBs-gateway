import { ServiceInstance } from "./serviceInstance.model";

export class Microservice {  
    serviceName:string;
    instances: ServiceInstance[];

    constructor(serviceName:string, instances: ServiceInstance[]){
        this.serviceName=serviceName;
        this.instances=instances;
    }

    getServicename():string{
        return this.serviceName;
    }

    getInstances():ServiceInstance[]{
        return this.instances;
    }

    addInstance(instance:ServiceInstance):void{
        //Primero chequear que no está la instancia agregada

        this.instances.push(instance);
    }

    equals(microService:Microservice):boolean{
        if(this.serviceName == microService.getServicename()){
            return true;
        }
        return false;
    }

}

// export default { Microservice }