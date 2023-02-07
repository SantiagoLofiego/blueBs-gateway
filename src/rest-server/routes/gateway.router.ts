import express from "express";
import { addGateway, removeGateway } from "../controllers/gateway.controller";

const route = express.Router();
const gatewayRouter = express.Router();

route.post("add", addGateway);
route.delete("delete", removeGateway);
gatewayRouter.use("/gateway", route);

export default gatewayRouter;
