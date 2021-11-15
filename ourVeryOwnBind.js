"use strict";

// function ownBind(func, context) {
//   return function(...args) { //rest operator
//     func.call(context, ...args); // spread operator because call doesn't take arrays
//   };
// }

// with partial function application
function ownBind(func, context, ...boundArgs) {
    return function(...args) {
      return func.call(context, ...boundArgs, ...args); // important to use call in this situation, because apply only takes a single array of arguments
    }
}


let testContext = {
  a: 'hi',
}

let test = function(arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
}

// let result = ownBind(test, testContext, 'bound');
// result('hi');

function addNumbers(a, b) {
  return a + b;
}

let addFive = ownBind(addNumbers, null, 5);
console.log(addFive(2));



// function myBind(func, ctx) {
//   let partialArgs = [].slice.apply(arguments, [2])
//   //copy the arguments object starting at the third argument
//   //this will copy everything that is not func or ctx

//   return function() {
//     let remainingArgs = [].slice.apply(arguments); // create a variable that is an array of all arguments passed to the returned function
//     let fullArgs = partialArgs.concat(remainingArgs); // take all the partialArgs from the closure and concat onto that array all the passed in arguments

//     return func.apply(ctx, fullArgs); // finally return the value of calling the closed around function with provided context, the partial args, followed by the passed in args
//   }
// }