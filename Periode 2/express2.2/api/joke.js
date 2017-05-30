var express = require('express');
var router = express.Router();
var jokes = require('../jokes');

router.get('/', function(req, res, next){
    //let json = {randomJoke: jokes.getRandomJoke()};
    res.json(jokes.getRandomJoke());
})

module.exports = router;
