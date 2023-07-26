const express = require("express");
const router = express.Router();
const home = require("../controllers/home");
const project = require("../controllers/project");
const issue = require("../controllers/issue");

const db = require("../config/mongoose");
router.use(express.urlencoded());

router.get("/", home.home);
router.get("/newProject", project.new);
router.post("/create", project.create);
router.get("/view/:id", project.view);
router.get("/view/:id/filter", project.filteredView);
router.get("/addIssue/:id", issue.add);
router.post("/createIssue/:id", issue.create);

module.exports = router;
