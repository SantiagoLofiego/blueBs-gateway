enum STATUS {
    OFFLINE = "offline",
    ONLINE = "online",
}

class ServiceInstance {      
  serviceName:string;
  host:string;
  port:string;
  status:STATUS;  

  constructor(serviceName:string,host:string, port:string, status:STATUS){
    this.serviceName=serviceName;
    this.host =host;
    this.port=port;
    this.status=status;
  }

  // getUrl():string{
  //   return this.host;
  // }

  // getServiceName():string{
  //   return this.serviceName;
  // }

  // getStatus():STATUS{
  //   return this.status;
  // }



  equals(serviceInstance:ServiceInstance):boolean{
    if(this.host===serviceInstance.host &&
       this.serviceName===serviceInstance.serviceName &&
       this.port===serviceInstance.port  
      ){
      return true;
    }else{
      return false;
    }
    
  }
}

module.exports = { ServiceInstance }
