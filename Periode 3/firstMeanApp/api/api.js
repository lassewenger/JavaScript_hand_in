var router = require('express').Router();
var connection = require("../db/db");
var database = connection.get();

router.get('/jokes', function(req, res){
 
 var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('joke');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
 }    

 res.json(docs);

})

module.exports = router;
