require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Failed to connect to MongoDB"));
db.once("open", function () {
  console.log("Successfully connected to MongoDB");
});
