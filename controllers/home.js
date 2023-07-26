const Project = require("../models/projects");

module.exports.home = function (req, res) {
  Project.find({})
    .then((result) => {
      return res.render("home", {
        title: "Project | Home",
        projects: result,
      });
    })
    .catch((err) => {
      console.log("Error in Fetching : ", err);
      return;
    });
};


