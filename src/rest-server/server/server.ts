import express, { Router, Express } from "express";

export class Server {
  private static instance: Server;
  private express: Express;

  constructor() {
    this.express = express();
  }

  static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }

  run(port: string): void {
    this.express.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
  start(router: Router) {
    this.express.use(`/server/`, router);
  }
}
