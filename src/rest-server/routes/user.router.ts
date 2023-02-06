import { UserController } from "../controllers/user.controller";

const express = require("express");

const router = express.Router();
const userRouter = express.Router();

const controller = new UserController();

router.get("/:username", controller.findUser);

userRouter.use("/users", router);

export default userRouter;
