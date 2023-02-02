import express, { Request, Response } from "express";
import config from "./config";
import microServiceServiceRouter from "./rest-server/routes/microService.router";

import { Server } from "./rest-server/server/server";

const port: string = config.server.port || "3000";
const server = express();
const serverMicroService = new Server();

server.use(express.json());

server.all("/api/:value", (req: Request, resp: Response) => {
  console.log(req.socket.address());
  resp.send(`Response from api with ${req.params.value} param`);
});

serverMicroService.run(port);
serverMicroService.start(microServiceServiceRouter);

//ruter principal en index para todos los rutas
