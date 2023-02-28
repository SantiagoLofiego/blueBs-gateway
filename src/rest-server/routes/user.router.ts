const express = require("express");

import { 
         findAll,
         findUser,
         login } from "../controllers/user.controller";



const router = express.Router();

router.get("/",findAll)
      .get("/:username",findUser)
      .post("/",login)

export default router;
