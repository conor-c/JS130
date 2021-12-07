"use strict";
// function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// }();
// The above code won't run, it's a function declaration thats unnamed

// (function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// })();
// The above code will work, this is not an anonymous IIFE

// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];



// sum += (function sum(arr) {
//   return arr.reduce((sum, number) => {
//     sum += numbers;
//     return sum;
//   }, 0)
// })(numbers);
// console.log(sum);
// the above gets a typeerror that sum is not a function.
// This error occurs because we have two variables named sum.
// this can be fixed by defining sum in an IIFE

// 4.
// (function countdown(start) {
//   for (let count = start; count >= 0; count -= 1) {
//     console.log(count);
//   }
// })(7);

// 5. The named function inside the IIFE is not accessible in the global scope

// 6
// let bar = (function multiply(start) {
//   let prod = start;
//   return function(factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2);

// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// 7. 
let number = 7;

(function recursiveCount(number) {
  console.log(number);

  if (number !== 0) {
    recursiveCount(number - 1);
  }
})(number);

console.log(number)