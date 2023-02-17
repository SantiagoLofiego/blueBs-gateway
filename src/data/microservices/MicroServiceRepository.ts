import MicroServiceRepositoryInterface from "../../domain/repositories/interfaces/MicroServiceRepositoryInterface";
import fs from "fs"
import { Microservice } from './../../domain/models/microservice.model';

const ServiceInstance = require('./../../domain/models/serviceInstance.model');

const data = fs.readFileSync(`${__dirname}/../../../db.json`,'utf-8').toString();
const dataObj:service = JSON.parse(data);

type service = [microservice:Microservice]

export class MicroServiceRepository implements MicroServiceRepositoryInterface{
    constructor(){}    
    
    private existMicroservice(microServiceName:string):boolean{                
        let result:boolean = false;
        console.log("LLEGA AL EXIST?");
        console.log(microServiceName);
        
        dataObj.forEach((element)=>{      
            //console.log("ELEMENT:" , element);                     
            if ( microServiceName == element.serviceName){                                 
                result = true;                
            }
        });
        console.log("RESULT", result);
        
        return result;
    }

    register(instance: ServiceInstance): void {
        const serviceName = instance.serviceName;
        
        //Si el microservicio existe le agrega la instancia, y sino crea un nuevo microservicio con la instancia
        if(this.existMicroservice(serviceName)){
            console.log("EXISTE");            
            const microserviceFinded = this.find(serviceName)
            microserviceFinded.instances.push(instance);
            let microserviceToAdd:Microservice = new Microservice(microserviceFinded.serviceName, microserviceFinded.instances);
            const posicion:number = dataObj.indexOf(microserviceFinded);
            dataObj[posicion] = microserviceToAdd;
            fs.writeFileSync(`${__dirname}/../../../db.json`,JSON.stringify(dataObj));
            console.log("AGREGADO");                                                            
        } else {
            let instances: ServiceInstance[] = [];
            instances.push(instance)            
            let newMicroservice = new Microservice(serviceName,instances);
            this.add(newMicroservice);
        }
        //console.log("Service Instance:", instance);        
    }

    update(instance: ServiceInstance): ServiceInstance {
        throw new Error("Method not implemented.");
    }

    remove(instance: ServiceInstance): ServiceInstance {
        throw new Error("Method not implemented.");
    }
 
    add(microService:Microservice): boolean {
        try{
            if(!this.existMicroservice(microService.serviceName)){                
                dataObj.push(microService);
                fs.writeFileSync(`${__dirname}/../../../db.json`,JSON.stringify(dataObj));
                return true;
            }else{
                console.log("No agregado porque está repetido"); 
                return false               
            }                      
        } catch(err){
            console.log(err);
            return false;            
        }
    }

    find(serviceName: string): Microservice {      
        const dataFiltered = dataObj.filter((element: { serviceName: string; }) => {
             return element.serviceName===serviceName;            
        });        
        return dataFiltered[0];
    }   

    getAll():service{ 
        return dataObj;
    }
}