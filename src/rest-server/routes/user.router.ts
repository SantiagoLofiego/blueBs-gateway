import { findAll,
    findUser } from "../controllers/user.controller";

const express = require("express");

const router = express.Router();

router.get("/",findAll);

router.get("/:username",findUser);

export default router;
