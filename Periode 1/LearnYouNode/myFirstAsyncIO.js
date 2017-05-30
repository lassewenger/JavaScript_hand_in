
let fs = require('fs');
let path = process.argv[2];

fs.readFile(path, function(err,data) {
  if (err){
    return err;
  }
  let lines = data.toString().split('\n').length-1;
  console.log(lines);
});

