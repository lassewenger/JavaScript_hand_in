var express = require('express');
var router = express.Router();
var jokes = require('../jokes');

router.post('/', function(req, res, next){
   jokes.addJoke(req.body.addJoke);
   
})


module.exports = router;