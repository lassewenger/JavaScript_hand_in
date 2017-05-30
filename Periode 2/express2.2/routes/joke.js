var express = require('express');
var router = express.Router();
var jokes = require('../jokes');

var jokeCount = 1;
var jokesCounter = 1;
var addJoke = 1;

router.get('/', function(req, res, next) {
  req.session.jokeCount = jokeCount++;
  res.render('joke', {title: 'Random joke', random: jokes.getRandomJoke, count: req.session.jokeCount});    
})

router.get('/jokes', function(req, res, next){
  req.session.jokesCount = jokesCounter++;
  res.render('jokes', {title: 'All jokes', jokes: jokes.allJokes, count: req.session.jokesCount});
  req.session.jokesCount++;
})

router.get('/addjoke', function(req, res, next){
  req.session.storeJokeCount = addJoke++;
  res.render('addjoke', {title:  'Add Joke', jokes: jokes.allJokes, count: req.session.storeJokeCount})
})

router.post('/addjoke', function(req, res, next){
  jokes.addJoke(req.body.addjoke)
  res.redirect('addjoke')
})


module.exports = router;
