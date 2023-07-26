const Project = require("../models/projects");
const Issue = require("../models/issues")

module.exports.new = function (req, res) {
  return res.render("newProject", {
    title: "Project | New",
  });
};

module.exports.create = function (req, res) {
  Project.create({
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
  })
    .then(() => {
      return res.redirect("/");
    })
    .catch((err) => {
      console.log("Error creating project", err);
      return;
    });
};

module.exports.view = function (req, res) {
  const projectId = req.params.id;
  const fetchProject = Project.findOne({ _id: projectId }).exec();
  const fetchIssues = Issue.find({ id: projectId }).exec();
  Promise.all([fetchProject, fetchIssues])
    .then(([project, issues]) => {
      return res.render("projectDetail", {
        title: "Project | View",
        project: project,
        issues: issues,
      });
    })
    .catch((err) => {
      console.error("Error in Fetching: ", err);
      return res.status(500).send("Internal Server Error");
    });
};

module.exports.filteredView = function (req, res) {
  const projectId = req.params.id;
  const { title, description, labels, author } = req.query;

  const filter = {
    id: projectId,
  };

  if (title) {
    filter.title = { $regex: new RegExp(title, "i") };
  }
  if (description) {
    filter.description = { $regex: new RegExp(description, "i") };
  }
  if (labels) {
    const labelArray = labels.split(",");
    filter.labels = { $all: labelArray };
  }
  if (author) {
    filter.author = { $regex: new RegExp(author, "i") };
  }

  Issue.find(filter)
    .then((filteredIssues) => {
      res.json(filteredIssues);
    })
    .catch((err) => {
      console.error("Error fetching filtered issues: ", err);
      return res.status(500).json({ error: "Error fetching filtered issues" });
    });
};







