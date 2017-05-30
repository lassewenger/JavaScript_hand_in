//day 1
//forEach, filter, map, reduce, join

let  names = ["Emma", "Lasse", "Jonas", "Lars", "Hamza", "ib"];

//--------------------Opg 1 filter og map------------------------------------
console.log("=================================================================")
let rows = names.map(function(name){
    return "<td>" + name + "</td>"
});

//tager hvert name i names og returner som uppercase-----
let uppercase = names.map(function(name){
    return name.toUpperCase();
});

console.log("Opg 1---Map to Uppercase")
console.log("\n" + uppercase + "\n");

let rowsStr = rows.join("\n     ");

let table = `<table>\n  <tbody>\n   ${rowsStr}\n  </tbody>\n</table>`;
//console.log("\n" + table + "\n");

//tager hvert name i names og ser om det opfylder kriterer og returnere array
let namesFilter = names.filter(function(name){
    return name.length >= 3;
}); 
console.log("Opg 1---Filter names")
console.log("\n" + namesFilter + "\n");
console.log("=================================================================")

//------------------Opg 3 Prototype--------------------------------------------------------
Array.prototype.myFilter = function(callback){    
    let arrayToReturn = [];
    this.forEach(function(name){
        let shouldInclude = callback(name);
        if(shouldInclude){
            arrayToReturn.push(name);
        };
    });
    return arrayToReturn;
};

let protoFilter = names.myFilter(function(name){
    return name.length >= 3;
})
console.log("Opg 3---Prototype filter")
console.log("ProtoTypeFilter: " + protoFilter + "\n");

Array.prototype.myMap = function (callback){
    let arrayToReturn = [];
    this.forEach(function(name){
        arrayToReturn.push(callback(name));
    });
    return arrayToReturn;
};

let protoMap = names.myMap(function(name){
    return name.toUpperCase();
});
console.log("Opg 3---Prototype map")
console.log("\nProtoTypeMap: " + protoMap + "\n");
console.log("=================================================================")

//------------------Opg 4 filter and map-----------------------------------------

//a----------
//laver et array med name i li tags
let li = names.map(function(name){
    return "  <li>" + name + "<li>\n";
});

let liToString = li.join(""); //laver array til string, argumentet er hvad der kommer til at stå imellem hvert objekt

let table2 = `<ul>\n${liToString}<ul>`; //liToString bliver sat i ul tags
console.log("Opg 4a---Map ul")
console.log(table2);

//b----------------
let names2 = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, 
                {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

let person = names2.map (function(person){
    return `<tr>\n  <td>${person.name}</td>\n  <td>${person.phone}</td>\n</tr>\n`
});

let personToString = person.join("");
let personTable = `${personToString}`;


console.log("\nOpg 4b---two column table string")
console.log(personTable + "\n");
//---c skrevet i html fil----------//document.getElementById("personTable").innerHTML = personTable;
//d------------


function myButton() {
    let namesFilter2 = names2.filter(function(person){
    return person.name.length >= 3;
}); 
console.log("\n" + namesFilter2 + "\n");
let person2 = namesFilter2.map (function(person){
    return `  <tr><td>${person.name}</td>\n  <td>${person.phone}</td></tr>\n`
});
console.log("\n" + person2 + "\n");
let filterToString = person2.join("");
let filterTable = `\n${filterToString}`;
console.log("\n" + filterTable + "\n");
    document.getElementById("personTable").innerHTML = filterTable;
};
