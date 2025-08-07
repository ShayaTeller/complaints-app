import { config } from "dotenv";
import express from "express";
import adminRouter from "./routes/admin.js";
import complainRouter from "./routes/complains.js";
import mongoclientdb from "./db/connect.js";

config();
// Load environment variables from .env file
// Initialize MongoDB connection
await mongoclientdb;
const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

//this middelware logs all requests method and url
server.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// this is the route of the admin options
server.use("/", adminRouter);
// this is the route of the complains options
server.use("/", complainRouter);

// this is the middelware that brings the html pages to the server
server.use("/", express.static("public"));

server.listen(process.env.PORT, () => {
  console.log(`listening on port: ${process.env.PORT}`);
});
