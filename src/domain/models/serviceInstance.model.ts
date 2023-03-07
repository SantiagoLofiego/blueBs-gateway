import md5 from "md5"

export enum STATUS {
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
  BUSY = 'BUSY'
}

export class ServiceInstance {
  id: string;
  protocol: string;
  ip: string;
  port: string;
  url: string;
  status: STATUS

  constructor(protocol: string, ip: string, port: string, status: STATUS) {
    this.protocol = protocol;
    this.ip = ip;
    this.port = port;
    this.url = `${protocol}://${ip}:${port}`
    this.id = md5(this.url);
    this.status = status;
  }

  static statusFromString(status: string): STATUS {
    switch (status.toLowerCase()) {
      case "online":
        return STATUS.ONLINE
      case "offline":
        return STATUS.OFFLINE
      case "busy":
        return STATUS.BUSY
      default:
        throw new Error(`The status \"${status}\" does not exist`);
    }
  }

  equals(serviceInstance: ServiceInstance): boolean {
    if (this.id === serviceInstance.id) {
      return true;
    } else {
      return false;
    }
  }
}
