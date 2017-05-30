

let myDirSearcher = require("./MakeItModular");

myDirSearcher(process.argv[2], process.argv[3], function(err, data){
    if(err){
        return callback(err);
    }
    console.log(data.join('\n'));
})