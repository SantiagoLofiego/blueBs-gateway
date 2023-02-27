import {
  getServiceUrl,
  getAllMicroservices,
  registerInstance,
  updateInstance,
  deleteInstance
} from "../controllers/microservice.controller";

const express = require("express");

const router = express.Router();

//Definición de endpoints

router.get("/:serviceName", getServiceUrl)
      .get("/",getAllMicroservices)
      .post("/", registerInstance)
      .put("/", updateInstance)
      .delete("/", deleteInstance)

export default router;
