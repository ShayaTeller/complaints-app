import mongoclientdb from "../db/connect.js";
// This file handles the complaints model, which interacts with the MongoDB database
// It provides functions to send a complaint and retrieve all complaints.
// It uses the MongoDB Node.js driver to perform database operations.

const db = mongoclientdb.db("Complaints");
const collection = db.collection("Complaints_table");

// This function sends a complaint to the database
// It takes the complaint details from the request body and inserts them into the database.
export async function sendAComplain(req, res) {
  const sobject = req.body.sobject;
  const complain = req.body.complain;
  console.log(sobject, complain);
  // Insert the complaint into the database
  const { error, data } = await collection.insertOne({
    sobject: sobject,
    complain: complain,
  });
  if (error) {
    // Log the error and return it
    console.error(error);
    return error;
  }
  if (data) {
    // Log the inserted data and return it
    console.log(data);
    return data;
  }
}

//this function retrieves all complaints from the database
// It returns an array of all complaints stored in the "Complaints_table" collection.
export async function GetAllComplains() {
  try {
    // Find all documents in the collection and convert them to an array
    const data = await collection.find().toArray();
    console.log(data);
    // Return the array of complaints
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
