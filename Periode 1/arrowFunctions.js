
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

var materialsLength1 = materials.map(function(material) { 
  return material.length; 
}); // [8,6,7,9]

console.log(materialsLength1);

var materialsLength2 = materials.map((material) => {
  return material.length;
}); // [8,6,7,9]

console.log(materialsLength2);

var materialsLength3 = materials.map(material => material.length); // [8,6,7,9]

console.log(materialsLength3);

//---------------------------------------------------------------------------------------------

function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;
  

  setInterval(function growUp() {
    // In non-strict mode, the growUp() function defines `this` 
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
    
  }, 1000);
}

var p = new Person();


function Person() {
  var that = this;
  that.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `that` variable of which
    // the value is the expected object.
    that.age++;
  }, 1000);
}


function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();