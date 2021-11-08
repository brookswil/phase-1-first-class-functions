// - The `receivesAFunction` function should:

// const { spy } = require("chai");

//   - take a _callback function_ as an argument
//   - call the callback function
//   - it doesn't matter what this function returns, so long as it calls the
//     callback function

// - The `returnsANamedFunction` function should:

//   - take no arguments
//   - return a _named function_

// - The `returnsAnAnonymousFunction` function should:
//   - take no arguments
//   - return an _anonymous function_

function receivesAFunction(callbackFunction) {
    return callbackFunction()
}

function returnsANamedFunction() {
    return function run(){

    }
}

 
function returnsAnAnonymousFunction() {
    return function(){

    }
}


// (function() {
//     console.log('returns a function')
// })();

// (returnsAnAnonymousFunction = function() {
//     console.log("Hello World");
// })();

// returnsAnAnonymousFunction()