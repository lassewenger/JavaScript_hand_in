//day 1
//opgave 2
let  names = ["Emma", "Lasse", "Jonas", "Lars", "Hamza", "ib"];

//my own filter------------
function myFilter(arr, callback){
    let arrayToReturn = [];
    arr.forEach(function(name){
        let shouldInclude = callback(name);
        if(shouldInclude){
            arrayToReturn.push(name);
        };
    });
    return arrayToReturn;
};

let names2 = myFilter(names, function(name){
    return name.length >= 3
});
console.log("\nOpgave 2----myOwnFilter")
console.log(names2 + "\n");
//--------------------------
//my own map---------------
function myMap(arr, callback){
    let arrayToReturn = [];
    arr.forEach(function(name){
        arrayToReturn.push(callback(name));
    });
    return arrayToReturn;
};

let uppercaseNames = myMap(names, function(name){
    return name.toUpperCase();
});
console.log("Opgave 2 ---- ownMap to upperCaser")
console.log(uppercaseNames);