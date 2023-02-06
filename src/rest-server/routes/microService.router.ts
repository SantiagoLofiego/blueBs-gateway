import {
  MicroserviceController
} from "../controllers/microservice.controller";

const express = require("express");

const router = express.Router();
const microServiceServiceRouter = express.Router();
const controller = new MicroserviceController();

//Definición de endpoints
router.get("/:microservice", controller.addMicroservice);

router.delete("/:microservice", controller.removeMicroservice);

router.get("/:serviceName", controller.getServiceUrl);

//Adición de ruta raíz para '/microservice'
microServiceServiceRouter.use("/microservice", router);

export default microServiceServiceRouter;
