import {
  addMicroservice,
  removeMicroservice,
  getServiceUrl,
} from "../controllers/microservice.controller";

const express = require("express");

const router = express.Router();
const microServiceServiceRouter = express.Router();

//Definición de endpoints
router.get("/:microservice", addMicroservice);

router.delete("/:microservice", removeMicroservice);

router.get("/:serviceName", getServiceUrl);

//Adición de ruta raíz para '/microservice'
microServiceServiceRouter.use("/microservice", router);

export default microServiceServiceRouter;
