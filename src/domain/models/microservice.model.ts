import { deleteInstance } from "../../rest-server/controllers/microservice.controller";
import { ServiceInstance } from "./serviceInstance.model";

export class Microservice {
    serviceName: string;
    instances: ServiceInstance[];

    constructor(serviceName: string, instances: ServiceInstance[]) {
        this.serviceName = serviceName;
        this.instances = instances;
    }

    getServicename(): string {
        return this.serviceName;
    }

    getInstances(): ServiceInstance[] {
        return this.instances;
    }

    addInstance(instance: ServiceInstance): void {
        //Primero chequear que no está la instancia agregada

        this.instances.push(instance);
    }

    updateInstance(instance: ServiceInstance): boolean {
        const index = this.indexOfInstance(instance);
        if (index >= 0) {
            this.instances[index] = instance;
            return true;
        } else { 
            return false; 
        }
    }

    // deleteInstance(instance: ServiceInstance) {

    // }

    indexOfInstance(instance: ServiceInstance): number {
        let encontrado: boolean = false;
        let i: number = 0;
        let posicionEncontrada: number = 0;
        this.instances.forEach(element => {
            if (instance.equals(element)) {
                (encontrado = true);
                posicionEncontrada = i;
            } else {
                i++;
            }
        });
        return encontrado ? posicionEncontrada : -1;
    }


    equals(microService: Microservice): boolean {
        if (this.serviceName == microService.getServicename()) {
            return true;
        }
        return false;
    }
}

// export default { Microservice }