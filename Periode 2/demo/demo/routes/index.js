var express = require('express');
var router = express.Router();

var persons = require("../model/model")
persons.addTestData();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { persons: persons.getAll 
 });
});

module.exports = router;
