import express from "express";
import { sendAComplain } from "../models/complaint.model.js";
const complainRouter = express.Router();

complainRouter.post("/postComplain", async (req, res) => {
  const result = await sendAComplain(req,res);
  console.log(result)
  res.json(await result)
});

export default complainRouter;
