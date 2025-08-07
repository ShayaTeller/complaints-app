import express from "express";
import validateUser from "../middlware/middlware.js";
import mongoclientdb from "../db/connect.js";
import { GetAllComplains } from "../models/complaint.model.js";
const adminRouter = express.Router();

// this is the route of the admin options
// this middelware checks if the user is admin
adminRouter.use("/admin", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  // this is the admin password that is stored in the .env file
  const correntPassword = process.env.ADMIN_PASS;
  if (password == correntPassword) {
    next();
  } else {
    // if the user is not admin, it sends a 404 error
    res.status(404).send("You are not authorized to access this page");
  }
});

//this route gets all the complains from the database
// it uses the GetAllComplains function from the complaint.model.js file
adminRouter.post("/admin", async (req, res) => {
  const result = await GetAllComplains();
  res.status(200).send(await result);
});

export default adminRouter;
