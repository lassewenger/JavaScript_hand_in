

function helloWorld() {
    console.log(myString); // => undefined
    var myString = 'Hello World';
    console.log(myString); // => Hello World
}

function example1() {

    x = 5; // Assign 5 to x

    elem = document.getElementById("demo"); // Find an element 
    elem.innerHTML = x;                     // Display x in the element

    var x; // Declare x

}

//This is what really happens.
function example2() {


    var x; // Declare x
    x = 5; // Assign 5 to x

    elem = document.getElementById("demo"); // Find an element 
    elem.innerHTML = x;                     // Display x in the element

}

helloWorld();