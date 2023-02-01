export enum STATUS {
  OK = "OK",
  ERROR = "ERROR",
}

export class ServiceInstance {
  ApiName: String | undefined;
  host: String;
  port: String;

  constructor(host: String, port: String) {
    this.host = host;
    this.port = port;
  }

  getUrl(): String {
    return (this.ApiName = `${this.host}:${this.port}`);
  }
}
