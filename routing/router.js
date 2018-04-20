var express = require("express");
var projects = require("../data/projects.js");

var router = express.Router();

router.get("/", function(req, res) {
    res.render("index");
});

router.get("/portfolio", function(req, res) {
    res.render("projects", {projects: projects});
});

module.exports = router;