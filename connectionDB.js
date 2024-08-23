const mongoose = require("mongoose");
require("dotenv").config();

const connection = {};
 async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    dbName: "job-portal",
  });
  connection.isConnected = db.connections[0].readyState;
  console.log("Connected to MongoDB");
}

module.exports = dbConnect;