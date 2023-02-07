import express from "express";
import { getGateway, removeGateway } from "../controllers/gateway.controller";

const gatewayRouter = express.Router();

gatewayRouter.get("/:apiName", getGateway);
gatewayRouter.delete("delete", removeGateway);

export default gatewayRouter;
