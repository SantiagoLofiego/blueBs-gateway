import MicroServiceRepositoryInterface from "../../domain/repositories/interfaces/MicroServiceRepositoryInterface";
import fs from "fs"
import { Microservice } from './../../domain/models/microservice.model';

import {ServiceInstance} from './../../domain/models/serviceInstance.model';

const data = fs.readFileSync(`${__dirname}/../../../db.json`, 'utf-8').toString();
const dataObj: service = JSON.parse(data);

type service = [microservice: Microservice]

export class MicroServiceRepository implements MicroServiceRepositoryInterface {
    constructor() { }

    // update(microService: Microservice): Promise<void> {
    //     // if(!this.existMicroservice(microService.serviceName)){
    //     //     throw new Error("No existe el microservicio");
    //     // }else{ 
    //     //     const microServiceIndex:number = this.indexOfMicroservice(microService);
    //     //     dataObj[microServiceIndex]=microService;
    //     //     return fs.promises.writeFile(`${__dirname}/../../../db.json`, JSON.stringify(dataObj));
    //     // }        
    // }

    remove(microService: Microservice): Promise<void> { //Remove Microservice        
        if(!this.existMicroservice(microService.serviceName)){
            throw new Error("No existe el microservicio");
        }else{ 
            const microServiceIndex:number = this.findIndex(microService);
            const deletedData=dataObj.splice(microServiceIndex,1);
            return fs.promises.writeFile(`${__dirname}/../../../db.json`, JSON.stringify(deletedData));
        }
    }

    save(microService: Microservice): Promise<void> {
        try {
            if (!this.existMicroservice(microService.serviceName)) { //Si no existe lo agrego, si existe lo reemplazo
                dataObj.push(microService);
            } else {
                const microServiceIndex = this.findIndex(microService);
                dataObj[microServiceIndex]=microService;
            }
           return fs.promises.writeFile(`${__dirname}/../../../db.json`, JSON.stringify(dataObj));             
        } catch (error) {
            throw new Error("No se pudo completar la operación de guardado de Microservice!!");
        }
    }

    findByName(serviceName: string): Microservice{ 
        const dataFiltered = dataObj.filter((element: { serviceName: string; }) => {
            return element.serviceName === serviceName;
        });        
        return dataFiltered[0];
    }
 
    getAll(): service {
        return dataObj;
    }
   

    private findIndex(microService: Microservice): number {
        let encontrado: boolean = false;
        let i: number = 0;
        while (!encontrado) {
            if (dataObj[i].serviceName == microService.serviceName) {
                encontrado = true;
            } else {
                i++;
            }
        }
        return encontrado ? i: -1;
    }
    
    private existMicroservice(microServiceName: string): boolean {
        let result: boolean = false;
        dataObj.forEach((element) => {
            if (microServiceName == element.serviceName) {
                result = true;            
            }
        });
        return result;
    }
}
