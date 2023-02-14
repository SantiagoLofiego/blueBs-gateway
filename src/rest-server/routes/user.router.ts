import { UserController } from "../controllers/user.controller";

const express = require("express");

const router = express.Router();
const userRouter = express.Router();

const controller = new UserController();

userRouter.get("/:username", controller.findUser);

export default userRouter;
