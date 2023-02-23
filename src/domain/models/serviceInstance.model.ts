enum STATUS {
    OFFLINE = "offline",
    ONLINE = "online",
}

export  class ServiceInstance {      
  serviceName:string;
  ip:string;
  port:string;
  status:STATUS=STATUS.ONLINE;//por default es ONLINE  

  constructor(serviceName:string, ip:string,port:string,status:string){
    this.serviceName = serviceName;
    this.ip = ip;
    this.port = port;
    this.setStatus(status||"online");
  }

  setStatus(status:string):void{
    const lowerStatus=status.toLocaleLowerCase();
    if(lowerStatus==="offline"){
      this.status=STATUS.OFFLINE;
    }else if (lowerStatus==="online"){
      this.status=STATUS.ONLINE;
    }
  }

  equals(serviceInstance:ServiceInstance):boolean{
    if(this.serviceName===serviceInstance.serviceName &&
        this.ip===serviceInstance.ip &&       
       this.port===serviceInstance.port  
      ){
      return true;
    }else{
      return false;
    }    
  }
}

