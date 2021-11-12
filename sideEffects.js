// A function call is said to have a side effect when it performs any of the following:
// 1. It reassigns any non-local variable
// 2. It mutates the value of any object referenced by a non local variable.
// 3. It reads from or writes to any data entity, that is non-local to the program. (files/ network connections)
      // Reading from a file on the systems disk
      // Writing to a file on the disk
      // Reading input from a keyboard (like readline.question)
      // writing to the console (console.log)
      // Accessing a database
      // Updating the display on a webpage
      // reading data from a form on a webpage
      // sending data to a remote site
      // accessing system hardware:
         // Mouse/trackpad/the clock/random number generator/audio speakers/camera
// 4. It raises an exception.
// 5. It calls another function that has any side effects that are not confined ot the current function.
//    EX: You call a function that mutates an argument, but that argument is local to the calling function
//        then it isn't a side effect.

// Basically, if it alters, or calls any function that alters, anything outside of the local function, it
// has a side effect. This includes logging something to the screen.

// When talking about functions having side effects, it's best to talk about function-calls having side effects
// because given certain arguments, a function could either have a side effect or not have a side effect

// example of the map function (method) having a side effect based on an argument (argument in this case
// will be a callback function)

[1, 2, 3].map(number => {
  return 2 * number;
});
// this function call of 'map' has no side effects

[1, 2, 3].map(number => {
  console.log(number);
  return 2 * number;
});
// while this function call of 'map' DOES have a side effect, the console.log (writes to a non local data entity)

// if a function is said to have side effects, it usually means that the function itself has a side effect when being used as intended, 
// regardless of any arguments

let date = new Date() // side effect of accessing the system clock
let randomNumber = Math.random(); // side effect of accessing the random number generator

// if a function can raise an exception without catching(handling) it, it had a side effect

function divideBy(numerator, denominator) {
  if (numerator === 0) {
    throw new Error("Can't divide by zero!"); 
  }

  return numerator / denominator;
}
// the side effect in the divideBy function is that it can throw an error without being able to handle it
// Note: even if it does catch it, the function can still potentially have a side effect if the exception
// handler itself has a side effect (like a console.log);

function divideBy(numerator, denominator) {
  try {
    if (numerator === 0) {
      throw new Error("Can't divide by zero!");
    }
  } catch (error) {
    console.log(error.message);
    return undefined;
  }

  return numerator / denominator;
}
// the above divideBy function still has a side effect, because the catch block performs a console.log

// Side Effects through other functions
// If a function calls another function, which then has a side effect that is visible outside of the calling function (the original function in this instance)
// then it's said that the calling function (also) has a side effect
// common situations of this happening (the calling function calling these):
// console.log
// readline.question
// new Date(), accesses the system clock
// Math.random()


// Note: if the calling function calls a function that has a side effect that is only local to the calling function
// then the calling function is not considered to have a side effect.
// Example:

function insertNumberInOrder(numArr) {
  numArr = numArr.slice(); // reassigns the local parameter numArr to the value of the argument numArr
  numArr.push(numArr); // this is mutating the local variable numArr (which was a copy of the argument)
  numArr.sort((a, b) => a - b); // sort is a function call, but it only has a local side effect
  return numArr; // the end result is that insertNumberInOrder has no side effects
}

// Functions should return a useful value OR have a side effect. NOT BOTH
// (generally)

// What is a Pure Function?
// A pure function has no side effects.
// And given the same set of arguments, the function always will return the same value (during the function's lifetime).
// *The return value of a pure function depends solely on its arguments*

const sum = (num1, num2) => num1 + num2;
// given the same set of arguments, sum will always return the same value, sum has no side effects, sum is a pure function


// pure functions have a key benefit, they are very easy to test because they are essentially in isolation from
// the program

// like function "calls" having side effects, its useful to talk about function calls being pure or impure

// Practice Problems
// 1.
const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);

// side effects: pop() mutates the array qux that is not local
// console.log

