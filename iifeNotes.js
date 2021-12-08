// Immediately Invoked Function Expressions

// Allows the definition and execution of a function in a single step.
// -- which allows the use of variable and function names that won't conflict

// syntax, surround the function expression in (), followed by (); directly after function end

(function() {
  console.log('hello');
})();

// function a() {
  // console.log('hello');
// }();

// if the function expression isn't surrounded by parentheses then a SyntaxError may occur
// although not strictly necessary, it is standard practice

// JS are used as a grouping tool, and control the order of evaluations during execution
// in basic scenarios, they change nothing except make intention clear
// in other scenarios they can completely alter the results

// 3 + (3 * 2) === 9
// (3 + 3) * 2 === 12

// the parentheses around IIFE's tell JS to evaluate the function, and then take the return value of the expression 
// and invoke it using function call parentheses

(function(number) {
  return number + 2;
})(4);
// return 6
// note that iife's have no problem taking arguments

// (there is also a style where the argument is inside the functions containing parentheses, but it's considered less clear)

// As stated above, the parentheses are not strictly necessary
// they are not needed when the function expression doesn't occur at the start of a line
// (like when a function definition is assigned to a variable)

let foo = function() {
  return function() {
    return 10;
  }() + 5;
}();

// here is a immediately invoked function expression, nested inside another immediately invoked function expression
console.log(foo); // 15

// the above way is hard to see immediately what is going on
// thats why parentheses for clarity are recommended 

let foo2 = (function() {
  return (function() {
    return 10;
  })() + 5;
})();

console.log(foo2);

// IIFE's also work with arrow functions

((first, second) => first * second)(5, 6);
// and super concise code can be created when taking advantage of single line arrow functions
// and their implicit return

// thousands of lines of messy JS code

let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
let largest = -Infinity;
for (let index = 0; index < array.length; index += 1) {
  if ((array[index] % 2) === 0 && (array[index] > largest)) {
    largest = array[index];
  }
}
console.log(largest); // 24

// more messy JS
// Issues: error if array or largest are already declared somewhere
//         without the use of let, we could be modifying a value that is needed
// Solutions: unique name (troublesome), or private scope

function findLargest() {
  let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
  let largest = -Infinity;
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 2) === 0 && (array[index] > largest)) {
      largest = array[index];
    }
  }

  return largest;
}

console.log(findLargest());

// the above code is better, array and largest are now function scoped, but we still introduce a new variable name
// into the program, or worse, the name is already in use!

// enter: immediately invoked function expressions

console.log((function(array) {
  // let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
  let largest = -Infinity;
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 2) === 0 && (array[index] > largest)) {
      largest = array[index];
    }
  }

  return largest;
})([5, 10, 12, 7, 9, 6, 24, -10, -200, 37]));

// the above is a good example of utilizing private function scopes
// but in ES6 you can also use blocks to create private scopes, without a function definition at all

{
  let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
  let largest = -Infinity;
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 2) === 0 && (array[index] > largest)) {
      largest = array[index];
    }
  }
  console.log(largest);
}

// blocks are more straightforward than IIFE's where ES6 is applicable.

// IIFEs also are useful for defining private data

// the previous closure only way:

function makeUniqueIdGenerator() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  }
};

let makeUniqueId = makeUniqueIdGenerator();
makeUniqueId(); // 1
makeUniqueId(); // 2

// or with an IIFE

const makeUniqueId = (function() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
})();

makeUniqueId(); // 1

// it's very obvious that private data with IIFE is more concise, we don't need
// a function generator, and we don't need a separate line to invoke that function
