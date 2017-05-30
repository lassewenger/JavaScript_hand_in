module.exports = f;
function f(x, y, ...rest) {
    let restParams = [...rest];
    let allParams = [x, y];

    restParams.forEach(function (element) {
        allParams.push(element);
    });

    console.log("sum: " + allParams.length);

    allParams.map(function (object) {
        console.log("rest value is a: " + object.constructor.name);
    });
}

console.log(f(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {}));

//B)
console.log("B)");

var rest = [true, 2, "hello World", [1, 2, 3], new Date(), {}];
var restParams = [...rest];
console.log(f(5, 2, ...restParams));

console.log("C)");
//C)
//var chars = [... f(5,2,...restParams)];
//console.log(chars);

//This produced an error