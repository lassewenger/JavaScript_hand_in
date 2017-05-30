var makePerson = function() {
  var age = 0;
  var name = " ";
  return {
    setAge: function(val) {age = val;},
    setName: function(val) {name = val;},
    getInfo: function() { return name + ", " + age;}
  }
};
var person1 = makePerson();
var person2 = makePerson();

console.log(person1.getInfo());
person1.setAge(10);
person1.setName("Per");
console.log(person1.getInfo());



