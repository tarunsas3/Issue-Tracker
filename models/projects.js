const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
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
    required: false,
  },
  author: {
    type: "string",
    required: true,
  },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
