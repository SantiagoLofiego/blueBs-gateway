import express from "express";
import { dispatcher } from "../controllers/gateway.controller";

const gatewayRouter = express.Router();

gatewayRouter.use("/:apiName", dispatcher);

export default gatewayRouter;
