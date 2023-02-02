import express, { Request, Response } from "express";
import config from "./config";
import microServiceServiceRouter from "./rest-server/routes";

import { Server } from "./rest-server/server/server";

const port: string = config.server.port || "3000";
const server = express();
const serverMicroService = new Server();
const routes = microServiceServiceRouter;

server.use(express.json());

server.all("/api/:value", (req: Request, resp: Response) => {
  console.log(req.socket.address());
  resp.send(`Response from api with ${req.params.value} param`);
});

serverMicroService.run(port);
serverMicroService.start(routes);
