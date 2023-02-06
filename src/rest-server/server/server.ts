import express, { Express, Response, Request } from "express";
import microServiceServiceRouter from "../routes/microService.router";

export class Server {
  private instance?: Server;
  private express: Express;

  constructor(private port?: number | string) {
    this.express = express();
    this.settings();
    this.middleware();
    this.start;
  }

  getInstance(): Server {
    if (!this.instance) {
      this.instance = new Server();
    }
    return this.instance;
  }

  private settings() {
    this.express.set("port", this.port || process.env.PORT || "3000");
  }

  private middleware() {
    this.express.use(express.json());
  }

  async run(): Promise<void> {
    await this.express.listen(this.port, () => {
      console.log(`Server running on port ${this.express.get("port")}`);
    });
  }
  private start(): void {
    this.express.all("api/:value", (req: Request, resp: Response) => {
      console.log(req.socket.address());
      resp.send(`Response from api with ${req.params.value} param`);
    });
    this.express.use(`/server`, microServiceServiceRouter);
  }
}
