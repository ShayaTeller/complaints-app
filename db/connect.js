import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
// Load environment variables from .env file
// Ensure you have a .env file with MONGO_URI defined
const uri = process.env.MONGO_URI;

//create a new MongoClient
if (!uri) {
  throw new Error("MONGO_URI is not defined in the environment variables");
}
export const mongoclientdb = new MongoClient(uri);

mongoclientdb.connect();
try {
  await mongoclientdb.connect();
  console.log("Connected to MongoDB");
} catch (err) {
  console.error("Error connecting to MongoDB:", err);
}

export default mongoclientdb;
