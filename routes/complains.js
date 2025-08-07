import express from "express";
import { sendAComplain } from "../models/complaint.model.js";
const complainRouter = express.Router();
// her in this router , i define the endpoint for sending an complain

// this endpoint posts a new complain thet is in the body
complainRouter.post("/postComplain", async (req, res) => {
  const result = await sendAComplain(req, res);
  console.log(result);
  res.json(await result);
});

export default complainRouter;
