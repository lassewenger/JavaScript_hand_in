

//block scoping
//let bliver i scope block og ikke global
//const holder sig i block scope og kan ikke overskrive values
var a = 1;

if(true){
    var b = 2;
}

console.log(b);

//Classes
class Parent{
    constructor(){

    }
    static foo(){

    }
    bar(){

    }
};

var parent = new Parent();
parent.foo();

class Child extends Parent {
    constructor(){
        super()
    }
    baz() {

    }
}

var child = new Child();
child.bar();

//arrow functions
//pas med med arrow function når man bruger jquery da det giver problemer med this
var foo = function (a, b) {
    return a + b;
};

var foo = (a, b) => {
    return a + b;
};

do.somthing ((a, b)=> return a +b); //return på denne måde virker kun som oneLiner

[0,1,2].map(val => val++);

var module = {
    age = 30,
    foo: function(){
        setTimeout(() =>{
            console.log(this.age);
        }, 100);
    }
}

//another file

import myModule from "myModule";

//generator function
async function (){
    var friend = await $.get("http://somesite.com/friends");
    console.log(friends);
}