const mongoose = require("mongoose");

const issuesSchema = new mongoose.Schema({
  id: {
    type: "string",
    required: true,
  },
  title: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  labels: {
    type: "array",
    required: true,
  },
  author: {
    type: "string",
    required: true,
  },
});

const Issue = mongoose.model("Issue", issuesSchema);
module.exports = Issue;
