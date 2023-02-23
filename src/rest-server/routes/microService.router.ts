import {
  getServiceUrl,
  getAllMicroservices,
  registerInstance,
  updateInstance,
  deleteInstance
} from "../controllers/microservice.controller";

const bodyParser = require('body-parser')
  
// create application/json parser
const jsonParser = bodyParser.json()

const express = require("express");

const router = express.Router();

//Definición de endpoints

router.get("/:serviceName", getServiceUrl);
router.get("/",getAllMicroservices);

//router.post("/addMicroservice", jsonParser ,addMicroservice);

router.post("/", registerInstance);
router.put("/", updateInstance);
router.delete("/", deleteInstance);



//Adición de ruta raíz para '/microservice'
//microServiceServiceRouter.use("/microservices", router);

export default router;
