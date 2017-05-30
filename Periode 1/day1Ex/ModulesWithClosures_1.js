var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {changeBy(1);},
    decrement: function() {changeBy(-1);},
    value: function() { return privateCounter;}
  }
};
var counter1 = makeCounter();
var counter2 = makeCounter();

counter1.increment();
counter1.increment();
counter2.increment();

console.log(counter1.value());
console.log(counter2.value());