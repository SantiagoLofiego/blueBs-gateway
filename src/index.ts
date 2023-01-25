import express, { Request, Response } from "express";
import config from "./config";
import router from "./rest-server/routes";

const port = config.server.port || 3000;
const server = express();

server.use(express.json());

server.all("/api/:value", (req: Request, resp: Response) => {
  console.log(req.socket.address());

  resp.send(`Response from api with ${req.params.value} param`);
});
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

server.use("/api/user", router);
