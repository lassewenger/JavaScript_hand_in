var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs')
var session = require("express-session");

var login = require('./routes/login');
var index = require('./routes/index');
var users = require('./routes/users');
var jokes = require('./routes/joke');

var apiJoke = require('./api/joke');
var apiJokes = require('./api/jokes');
var apiAddJoke = require('./api/addJoke');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:'secret_3162735',saveUninitialized:true, resave: true}));

app.use(function (req, res, next) {
if(req.url.startsWith('/api/')){
  next();
}

if(session.userName != null){
    return next();
  }
else if(req.body.userName != null){
session.userName = req.body.userName;
return res.redirect("/");
}
req.url = "/login";
return next();
});

app.use('/login', login);
app.use('/', index);
app.use('/users', users);
app.use('/joke', jokes);

app.use('/api/joke', apiJoke);
app.use('/api/jokes', apiJokes);
app.use('/api/AddJokeoke', apiAddJoke);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
