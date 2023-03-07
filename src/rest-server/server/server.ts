import express, { Express, RequestHandler, Router } from "express";
export class Server {
  private static instance: Server;
  private express: Express;

  private constructor() {
    this.express = express();
  }

  static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }

  use(handler: RequestHandler) {
    this.express.use(handler);
  }

  run(port?: number | string) {
    this.express.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
