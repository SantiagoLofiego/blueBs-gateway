
class Microservice {  
    serviceName:string;
    instances: ServiceInstance[];

    constructor(serviceName:string, instances: ServiceInstance[]){
        this.serviceName=serviceName;
        this.instances=instances;
    }
}

module.exports = { Microservice }
