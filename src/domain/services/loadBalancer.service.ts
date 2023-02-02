class loadBalancerService {
    
    constructor(){};

    async getInstance(serviceName:string) : Promise<string> { //Lo harcodee a String para que no tire error, devuelve en realidad un ServiceInstance
        return "ServiceIntance"    
    }        
}