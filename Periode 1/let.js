
//Global - They are very similar when used like this outside a function block.
let me = 'go';  // globally scoped
var i = 'able'; // globally scoped

// However, global variables defined with let will not be added as properties -
// on the global window object like those defined with var.
console.log(window.me); // undefined
console.log(window.i); // 'able'

//Function - They are identical when used like this in a function block.
function ingWithinEstablishedParameters() {
    let terOfRecommendation = 'awesome worker!'; //function block scoped
    var sityCheerleading = 'go!'; //function block scoped
}

// Block - Here is the difference. let is only visible in the for() loop and var is visible to the whole function.
function allyIlliterate() {
    //tuce is *not* visible out here

    for( let tuce = 0; tuce < 5; tuce++ ) {
        //tuce is only visible in here (and in the for() parentheses)
        //and there is a separate tuce variable for each iteration of the loop
    }

    //tuce is *not* visible out here
}

function byE40() {
    //nish *is* visible out here

    for( var nish = 0; nish < 5; nish++ ) {
        //nish is visible to the whole function
    }

    //nish *is* visible out here
}

// Redeclaration - Assuming strict mode, var will let you re-declare the same variable in the same scope. 
// On the other hand, let will not:
'use strict';
let me = 'foo';
let me = 'bar'; // SyntaxError: Identifier 'me' has already been declared
'use strict';
var me = 'foo';
var me = 'bar'; // No problem, `me` is replaced.