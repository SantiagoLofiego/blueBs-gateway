const boom = require("@hapi/boom"); // Es un manejador de errorres

export class MicroServiceService {
  constructor() {}

  async add(service: ServiceInstance) {}

  async remove(service: ServiceInstance) {}


    async getService(serviceName:string): Promise<ServiceInstance> {
        return new ServiceInstance('','','',STATUS.ONLINE); 
    }
       
}
