import {
  addMicroservice,
  removeMicroservice,
  getServiceUrl,
  getAllMicroservices,
  registerInstance
} from "../controllers/microservice.controller";

const bodyParser = require('body-parser')
  
// create application/json parser
const jsonParser = bodyParser.json()

const express = require("express");

const router = express.Router();

//Definición de endpoints
router.post("/addMicroservice", jsonParser ,addMicroservice);

router.delete("/:microservice", removeMicroservice);

router.post("/registerInstance", jsonParser, registerInstance);
router.get("/:serviceName", getServiceUrl);
router.get("/",getAllMicroservices);

//Adición de ruta raíz para '/microservice'
//microServiceServiceRouter.use("/microservices", router);

export default router;
