var express = require('express');
var router = express.Router();
var session = require("express-session");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', session: session.userName});
});

module.exports = router;