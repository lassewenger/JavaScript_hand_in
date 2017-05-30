var express = require("express");
var router = express.Router();
var cors = require("cors");
var connection = require("../config/database");
ObjectId=require('mongodb').ObjectId;
//router.all("/projects",cors(),function(req,res,next){
//  next();
//})

router.all("/projects", cors(), function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header['Access-Control-Allow-Methods'] = 'GET,HEAD,PUT,PATCH,POST,DELETE'
  res.header['Access-Control-Allow-Headers'] = ' Content-Type, Accept';
  next();
})

router.get("/projects", function (req, res) {
  var db = connection.get();
  db.collection("projects").find({},{__v: 0}).toArray(function (err, projects) {
    if (err) {
      res.status(500);
      return res.json({code: 500, msg: "Could not fetch projects"})
    }
    res.json(projects);
  })
})

router.post("/projects", function (req, res) {
  var project = req.body;
  var db = connection.get();
  db.collection("projects").insertOne(project, function (err, r) {
    if(err){
      res.status(500);
      return res.json({code: 500, msg: "Could not create a new project"})
    }
    var newProject = r.result;
    console.log(newProject);
    return res.json(project);
  })

})


router.put("/projects", function (req, res) {
  var project = req.body;
  var db = connection.get();
  var id = new ObjectId(project._id);
  delete project._id;
  db.collection("projects").replaceOne({_id:id},project,function(err,result){
    if(err){
      res.status(500);
      return res.json({code: 500, msg: "Could not update the provided project: "+err})
    }
    console.log("Result: "+result);
    return res.json(result);
  });

});

router.delete("/projects", function (req, res) {
  var project = req.body;
  var db = connection.get();
  var id = new ObjectId(project._id);
  db.collection("projects").deleteOne({_id:id},project,function(err,deleted){
    if(err){
      res.status(500);
      return res.json({code: 500, msg: "Could not delete the provided project: "+err})
    }
    console.log("Deleted: "+deleted);
    return res.json(deleted);
  });

});


module.exports = router;