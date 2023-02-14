import express, { Express, Router } from "express";
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

  routes(route: Router) {
    this.express.use(route);
  }

  run(port?: number | string) {
    this.express.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
