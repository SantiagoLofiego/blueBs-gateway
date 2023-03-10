
class Microservice {  
    private serviceName:string;
    private instances: ServiceInstance[];

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

}

module.exports = { Microservice }
