require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Tarun:XFNR9ekJOXixm3MG@cluster0.myvn379.mongodb.net/items?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Failed to connect to MongoDB"));
db.once("open", function () {
  console.log("Successfully connected to MongoDB");
});
