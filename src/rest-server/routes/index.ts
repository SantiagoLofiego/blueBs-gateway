import express from "express";

const router = express.Router();

router.use(express.json());

const add = () => {
  console.log("Add user");
};

const remove = () => {
  console.log("User deleted");
};

const getService = () => {
  console.log("Service...");
};

router.post("/add", add);
router.post("/remove", remove);
router.post("/getService", getService);

export default router;
