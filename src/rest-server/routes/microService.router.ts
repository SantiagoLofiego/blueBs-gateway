import {
  addMicroservice,
  removeMicroservice,
  getServiceUrl,
  getService,
} from "../controllers/microservice.controller";

const express = require("express");

const router = express.Router();
const microServiceServiceRouter = express.Router();

//Definición de endpoints
microServiceServiceRouter.get("/:microservice", addMicroservice);

microServiceServiceRouter.delete("/:microservice", removeMicroservice);

microServiceServiceRouter.get("/:serviceName", getServiceUrl);

//Adición de ruta raíz para '/microservice'
//microServiceServiceRouter.use("/microservices", router);

export default microServiceServiceRouter;
