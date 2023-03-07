import { Router } from "express";
import userRouter from "./user.router";
import microServiceServiceRouter from "./microService.router";
import gatewayRouter from "./gateway.router";

const routes = Router();
routes.use("/user", userRouter);
routes.use("/microservices", microServiceServiceRouter);
routes.use("/gateway", gatewayRouter);
export default routes;
