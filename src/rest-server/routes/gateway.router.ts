import express from "express";

const gatewayRouter = express.Router();

gatewayRouter.use("/gateway", () => {
  console.log("gateway");
});

export default gatewayRouter;
