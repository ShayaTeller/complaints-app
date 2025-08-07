import mongoclientdb from "../db/connect.js";

const db = mongoclientdb.db("Complaints");
const collection = db.collection("Complaints_table");

export async function sendAComplain(req, res) {
  const sobject = req.body.sobject;
  const complain = req.body.complain;
  console.log(sobject, complain);
  const { error, data } = await collection.insertOne({
    sobject: sobject,
    complain: complain,
  });
  if (error) {
    return error;
  }
  if (data) {
    return data;
  }
}

export async function GetAllComplains() {
  try {
    const data = await collection.find().toArray();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

