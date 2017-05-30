

//destructuring
var foo = {
    bar: 1,
    baz: 2
};

var {bar, baz} = foo;

var tenses = ["me", "you", "he"];
var [firstPerson, secondPerson] = tenses;

Promise.all([promise1, promise2]).then(function([results1, results2]){
    
});

var foo2 = 2;

var obj = {
    bar: 1,
    foo2,
}

var name = "will";
var age = 34;

some.method({name, age});
{
    name: name,
    age
}

//destructuring arguments
function calcBmi({weight: w, height: h, max = 25, callback}){
    var bmi = w / Math.pow(height, 2);
    if(bmi > max) {
        console.log("you're overwright");
    }
    if(callback){
        callback(bmi);
    }
}
calcBmi({weight, height, max: 25});
calcBmi({weight, height, callback: function(){}});

//template Strings

var name2 = "will";
var thing = "party";
/*var greet = "hi, my name is\n" 
                +name2 + "and i like to\n"
                 + thing + ".";*/
var greet = `hi, my name is ${name2} 
                and i like to ${thing}`;