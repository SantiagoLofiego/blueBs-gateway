import MicroServiceRepositoryInterface from "../../domain/repositories/interfaces/MicroServiceRepositoryInterface";
import fs from "fs"
import { Microservice } from './../../domain/models/microservice.model';

const ServiceInstance = require('./../../domain/models/serviceInstance.model');

const data = fs.readFileSync(`${__dirname}/../../../db.json`, 'utf-8').toString();
const dataObj: service = JSON.parse(data);

type service = [microservice: Microservice]
type serviceInstance = ServiceInstance;

export class MicroServiceRepository implements MicroServiceRepositoryInterface {
    constructor() { }

    private existMicroservice(microServiceName: string): boolean {
        let result: boolean = false;

        dataObj.forEach((element) => {

            if (microServiceName == element.serviceName) {
                result = true;
            }
        });

        return result;
    }

    register(instance: ServiceInstance): void {
        const serviceName = instance.serviceName;

        //Si el microservicio existe le agrega la instancia, y sino crea un nuevo microservicio con la instancia
        if (this.existMicroservice(serviceName)) {

            const microserviceFinded = this.find(serviceName)
            microserviceFinded.instances.push(instance);
            let microserviceToAdd: Microservice = new Microservice(microserviceFinded.serviceName, microserviceFinded.instances);
            const posicion: number = dataObj.indexOf(microserviceFinded);
            dataObj[posicion] = microserviceToAdd;
            fs.writeFileSync(`${__dirname}/../../../db.json`, JSON.stringify(dataObj));

        } else {
            let instances: ServiceInstance[] = [];
            instances.push(instance)
            let newMicroservice = new Microservice(serviceName, instances);
            this.add(newMicroservice);
        }

    }

    update(instance: ServiceInstance): void {
        const serviceName = instance.serviceName;
        const microServiceFinded = this.find(serviceName)
        const arrayInstances = microServiceFinded.instances;
        const microServicePosition: number = this.indexOfMicroservice(dataObj, microServiceFinded);
        const positiontoUpdate = this.indexOfInstance(arrayInstances, instance);

        if(positiontoUpdate!=-1){
            dataObj[microServicePosition].instances[positiontoUpdate]=instance;
            fs.writeFileSync(`${__dirname}/../../../db.json`, JSON.stringify(dataObj));
        }

    }

    remove(instance: ServiceInstance): void { //Remove Instance
        const serviceName = instance.serviceName;
        const microServiceFinded = this.find(serviceName)
        const arrayInstances = microServiceFinded.instances;
        const microServicePosition: number = this.indexOfMicroservice(dataObj, microServiceFinded);
        const positiontoDelete = this.indexOfInstance(arrayInstances, instance);

        if ((arrayInstances.length = 1 ) && (positiontoDelete!=-1)) { //Si existe sola una instancia y es la que busco eliminar
            dataObj.splice(microServicePosition,1);//Elimino el microservicio del archivo
        } else {
            arrayInstances.splice(positiontoDelete, 1);//Elimino la instancia del arreglo temporal      
            dataObj[microServicePosition].instances = arrayInstances; 
        }
        fs.writeFileSync(`${__dirname}/../../../db.json`, JSON.stringify(dataObj));
    }

    add(microService: Microservice): boolean {
        try {
            if (!this.existMicroservice(microService.serviceName)) {
                dataObj.push(microService);
                fs.writeFileSync(`${__dirname}/../../../db.json`, JSON.stringify(dataObj));
                return true;
            } else {
                console.log("No agregado porque está repetido");
                return false
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    find(serviceName: string): Microservice {
        const dataFiltered = dataObj.filter((element: { serviceName: string; }) => {
            return element.serviceName === serviceName;
        });
        return dataFiltered[0];
    }

    getAll(): service {
        return dataObj;
    }

    private equalIsntances(instance1: ServiceInstance, instance2: ServiceInstance): boolean {
        if (instance1.host === instance2.host &&
            instance1.port === instance2.port &&
            instance1.serviceName === instance2.serviceName) {
            return true
        } else {
            return false
        }
    }

    private indexOfInstance(arrayInstances: ServiceInstance[], instance: ServiceInstance): number {
        let encontrado: boolean = false;
        let i: number = 0;
        while (!encontrado) {
            const actualInstance: serviceInstance = arrayInstances[i];
            if (this.equalIsntances(actualInstance, instance)) {
                encontrado = true;
            }
            i++;
        }

        return i - 1;

    }

    private indexOfMicroservice(microServiceArray: Microservice[], microService: Microservice): number {
        let encontrado: boolean = false;
        let i: number = 0;
        while (!encontrado) {
            if (microServiceArray[i].serviceName == microService.serviceName) {
                encontrado = true;
            } else {
                i++;
            }
        }
        return i;
    }
}