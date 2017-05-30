

const path = require('path');
let fs = require('fs');

let dirSearcher = function(pathToFile, ext, callback){
   fs.readdir(pathToFile, function(err, data){
    if(err){
        return callback(err);
    }
    let extension = "." + ext;
    let filtered = data.filter((file) => path.extname(file) === extension);
    callback(null, filtered);
    });
}
module.exports = dirSearcher;