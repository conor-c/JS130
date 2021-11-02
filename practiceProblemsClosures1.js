// let counter = 0;

// function makeCounter() {
//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter()); 1
// console.log(incrementCounter()); 2

// incrementCounter = makeCounter(); 
// console.log(incrementCounter()); 3
// console.log(incrementCounter()); 4

// function makeCounter() {
//   return function() {
//     let counter = 0; // now counter has a local scope to the anonymous function
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// // the counter variable will get garbage collected each time the 
// // anonymous function finishes executing, as it has local scope the anonymous
// // function and not to the makeCounter function
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 1

// incrementCounter = makeCounter(); 
// console.log(incrementCounter()); // 1 
// console.log(incrementCounter()); // 1

// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// // makeCounter will return an anonymous function that closes around the 
// // variable counter declared in the makeCounter function. 
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 2

// incrementCounter = makeCounter();
// // when makeCounter() is run and evaluated again, it creates a new local
// // variable counter
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 2

// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   }
// }
// // the result will be the same as above, makeCounter() creates new local
// // counter variables that the anonymous returned function closes around.

// let incrementCounter1 = makeCounter();
// let incrementCounter2 = makeCounter();

// console.log(incrementCounter1()); // 1
// console.log(incrementCounter1()); // 2

// console.log(incrementCounter2()); // 1
// console.log(incrementCounter2()); // 2

// function makeMultipleLister(num) {
//   let number = num;

//   return function() {
//     let positiveInt = 1;
//     let product = number * positiveInt;

//     while (product < 100) {
//       console.log(product);
//       positiveInt += 1;
//       product = positiveInt * number;
//     }
//   }
// }

// or

// function makeMultipleLister(num) {
//   return () => {
//     for (let product = num; product < 100; product += num) {
//       console.log(product);
//     }
//   }
// }
// let lister = makeMultipleLister(17);
// lister();

// // 17
// // 34
// // 51
// // 68
// // 85

// if we don't want total to be global scope, we can utilize closures
// function addAndSubtractFromTotal() {
//   let total = 0;

//   let add = (num) => {
//     total += num;
//     console.log(total);
//   }

//   let subtract = (num) => {
//     total -= num;
//     console.log(total);
//   }

//   return [add, subtract];
// }

// let funcs = addAndSubtractFromTotal();
// let add = funcs[0];
// let subtract = funcs[1];

// add(1);
// add(42);
// subtract(39);
// add(6);

// function foo(start) {
//   let prod = start;
//   return function(factor) {
//     prod *= factor;
//     return prod;
//   };
// }
// // foo(start) returns an anonymous function that closes around the variable
// // `prod`, the returned function will then reassign that variable to be
// // equal to the result of `prod *= factor`
// let bar = foo(2);
// // equal to the returned function with a starting value of prod = 2
// let result = bar(3);
// // prod equals 6
// // result = 6
// result += bar(4);
// // prod equal 24
// //result = 30
// result += bar(5);
// // prod equals 120
// // result = 150
// console.log(result);
// // 150

// function later(func, arg) {
//   // return () => {
//   //   func(arg);
//   // }
//   return func.bind(null, arg);
// }

// const logger = message => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

// function globalTest() {
//   console.log('global');
// }
// let a = 'globalVar'

// function test() {
//   let a = 'localVar'
//   let globalTest = function globalTest() {
//     console.log('local', a);
//   }
//   globalTest();
// }

// test();

// let val = 7
// function createAdder() {
//   function addNumbers(a, b) {
//     let ret = a + b
//     return ret
//   }
//   return addNumbers
// }
// let adder = createAdder()
// let sum = adder(val, 8)
// console.log('example of function returning a function: ', sum)

/*
Step 1: let is seen, we know a identifier is about to be declared
It's name is 'val' and it is in the TDZ until execution
Later we seen an assignment operator and a value of 7
It's scope is global

line 2 a variable 'createAdder' is declared, a function definition is
assigned to it, lines 3 - 8 are what makes up the function, and are
what makes up the function definition

line 9 we see a let declaration, the name adder is declared and assigned
to a function call, that function call is createAdder();
JS looks for a function named createAdder in the local scope, which in
this instance is the global scope

Jump to createAdder(), no arguments are passed so we go right into the function
definition

line 3 has a function declaration addNumbers that takes two arguments
we assign the function definition from 4-6 to the variable addNumbers,
the function doesn't execute.

Line 7 has a return statement that returns a variable 'addNumbers'
since the function is not invoked, the function definition is returned,
the local execution context is destroyed

adder is now equal to the returned function 'addNumbers'

line 10 we see a let operator, we assign the identifier 'sum' to the 
result of calling the function 'adder' and passing it two arguments
one of those arguments is a variable named 'val', we look in the local
execution context of sum, which is the global execution context, and we 
find a variable named val, it has a value of 7

the function adder is called with the arguments 7, 8

jumping into the function adder, a new local execution context is created
two parameter variables are created in that local execution context 
a and b, a is set to 7, and b is set to 8

JS is now ready to begin executing inside the function body
a local variable ret is declared, its value is equal to the result of
adding the variables a and b together, JS looks for the variables in the local
execution context and finds them, 7, 8, so now ret is equal to 15
a variable 'ret' is returned, JS looks for it, finds its 15, returns 15
JS terminates the function, the local execution context is destroyed and popped
off the stack, sum is now set to 15

*/

// function createCounter() {
//   let counter = 0
//   const myFunction = function() {
//     counter = counter + 1
//     return counter
//   }
//   return myFunction
// }
// const increment = createCounter()
// const c1 = increment()
// const c2 = increment()
// const c3 = increment()
// console.log('example increment', c1, c2, c3)

/*
a variable 'createCounter' is assigned a function definition, the function 
definition consists of the lines 250-255

a constant "increment" variable, is set to equal the result of calling
a function createCounter()

createCounter() is found, and begins to execute

A new local execution context is created, a variable counter is declared
with function-scope and set to the value of the integer 0.

a constant variable myFunction is created, and assigned an anonymous function
defined from lines 252-253. It does not execute at this time.

finally createCounter() returns the definition of "myFunction" which equals
that anonymous function described above. But along with the function definition
is the closure, which contains a variable 'counter', the value of which
is one. (the local execution context of createCounter is destroyed)


the variable c1 is set to the result of calling "increment()", 
which is the anonymous function + closure (of counter) from before,
this is the first time that the increment() function has been called. 
The value of counter is now 1, and c1 = 1

it will log, 1, 2, 3
*/

// 8

// function later(func, arg) {
//   return () => func(arg);
// }

// let test = later((text) => console.log(text), 'hello'); 
// test();

//9

// function later2(func, arg1) {
//   return function(arg2) {
//     func(arg1, arg2);
//   }
// }

// let later2 = (func, arg1) => (arg2) => func(arg1, arg2);

// const notify = function(message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The System is shutting down");
// shutdownWarning(30);

"use strict";

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }

function bind(context, func) {
  return () => func.call(context);
}