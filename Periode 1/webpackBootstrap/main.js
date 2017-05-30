require("./main.css");
require('bootstrap/dist/css/bootstrap.css');

let _ = require('lodash');

function Person(fn, ln, s, y) {
  this.firstName = fn;
  this.lastName = ln;
  this.favoriteSport = s;
}

const persons = [
  new Person("Kurt", "Wonnegut", "Soccer"),
  new Person("Jan", "Peterson", "Hockey"),
  new Person("Jane", "Peterson", "Skating"),
  new Person("John", "Hansen", "Soccer"),
]


let propertyNames = _.keys(new Person);               //lægger Person attributes i variable

let headerTitleArray = propertyNames.map(function (title) {  //looper array igennem
  let tHead = '<th>' + _.startCase(title) + '</th>';     //Ændrer string  
  return tHead;
})

let headerTitle = '<tr>' + headerTitleArray.join("") + '</tr>';
console.log(headerTitle);

let tbodyArray = persons.map(function (person) {
  let element = "";
  for (var key in person) {
    if (person.hasOwnProperty(key)) {

      element += `<td>${person[key]}</td>`;
    }
  }

  return '<tr>' + element + '</tr>';
})
let tbody = tbodyArray.join("");
console.log(tbody);

const table = `<table class="table" style="width: 80%">${headerTitle + tbody}</table>`;
console.log(table);
document.getElementById('my-table').innerHTML = table;