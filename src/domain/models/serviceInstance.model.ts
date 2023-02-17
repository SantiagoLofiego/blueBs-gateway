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
    if(this.serviceName===serviceInstance.serviceName){
      return true;
    }else{
      return false;
    }
    
  }
}

module.exports = { ServiceInstance }
