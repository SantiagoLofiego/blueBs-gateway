import express, { Router } from "express";
import userRouter from "./user.router";
import microServiceServiceRouter from "./microService.router";

const routes = Router();
const app = express();

app.use(express.json());
routes.use(userRouter, microServiceServiceRouter);

export default routes;
