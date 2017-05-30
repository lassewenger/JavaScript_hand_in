const express = require("express");
const app = express();

var bodyParser = require("body-parser");


app.listen(3000, function () {
    console.log("Server started, listening om: " + 3000);
})

app.use(bodyParser.urlencoded({extended: false}));

app.use("/api/calculator/:operation/:n1/:n2", function (req, res, next) {//custom middleware

    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
    }

    req.calculator = calculatorRequest; //lægger calculator object i req object

    next();

})

app.get("/api/calculator/*", function (req, res) {
   
    var result;

    switch (req.calculator.operation) {
        case "+":
            result = req.calculator.n1 + req.calculator.n2
            break;

        case "-":
            result = req.calculator.n1 - req.calculator.n2
            break;

        case "*":
            result = req.calculator.n1 * req.calculator.n2
            break;

        case "div":
            result = req.calculator.n1 / req.calculator.n2
            break;
    }

    res.send("Result: " + (result));
})
