const Issue = require("../models/issues")

module.exports.add = function (req, res) {
  const Id = req.params.id
  return res.render("issue", {
    title: "Issue | create",
    id: Id,
  });
};

module.exports.create = function (req, res) {
  Issue.create({
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    labels: req.body.labels,
    author: req.body.author,
  }).then(() => {
    let returnUrl = "/view/" + req.params.id;
    return res.redirect(returnUrl);
  }).catch((err) => {
    console.log("Error creating Issue", err);
    return
  })
  
};
