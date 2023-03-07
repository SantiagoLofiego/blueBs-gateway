import{registerInstance, getInstance, getAllMicroservices, updateInstance, deleteInstance} from "../controllers/microservice.controller";

const express = require("express");

const router = express.Router();

//Definición de endpoints

router.post("/:serviceName", registerInstance)
      .get("/:serviceName", getInstance)
      .get("/",getAllMicroservices)
      .patch("/:serviceName/:id", updateInstance)
      .delete("/:serviceName/:id", deleteInstance)

export default router;
