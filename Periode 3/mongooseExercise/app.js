let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let logger = require('morgan');
let api = require("./api/api");
app.set("json spaces", 2);
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api",api);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  console.error(err.status);
  res.status(err.status || 500);
  res.json({msg: err.message,status: err.status});
})

//Call this to initialize mongoose
function initMongoose(dbConnection){
  require("./db/mongooseConnect")(dbConnection);
}

app.initMongoose = initMongoose;

module.exports = app;


