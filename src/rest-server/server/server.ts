import express, { Express } from "express";
import routes from "../routes";

export class Server {
  private static instance: Server;
  private express: Express;

  private constructor(private port?: number | string) {
    this.express = express();
    this.settings();
    this.routes();
  }

  static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }

  private settings() {
    this.express.set("port", this.port || process.env.PORT || "3000");
  }

  private routes() {
    this.express.use(routes);
  }

  run(port?: number | string) {
    this.express.listen(port, () => {
      console.log(`Server running on port ${this.express.get("port")}`);
    });
  }
}
