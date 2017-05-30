const port = 8000;
let app = require("./app");
app.initMongoose("mongodb://localhost/testJokeDB");
app.listen(port,() => console.log(`Started Server Listening on ${port}`));