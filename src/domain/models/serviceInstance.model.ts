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

  getUrl():string{
    return this.host;
  }
}

module.exports = { ServiceInstance }
