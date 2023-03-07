import express from "express";
import routes from "./routes";
import { Server } from "./server/server";


const server = Server.getInstance();
server.use(express.json())
server.use(routes)

export default server;