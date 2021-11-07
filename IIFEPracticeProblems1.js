// 1.
// function() {
  // console.log("Sometimes, syntax isn't intuitive!");
// }();
// 
// will the above code run?
// No: in the above we are trying to create a function declaration without a name.
// it needs to be a function expression before it can be immediately invoked


// 2.
// it can be rewritten a couple ways
// (function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// })();

// // or assigned to a variable
// // with parentheses

// let test = (function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// })();

// // without parentheses
// let test2 = function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// }();

// 3. Why does the code below throw an error? correct by using an IIFE
// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// let numberSum = (function sum(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);

// sum += numberSum;
// console.log(sum)
// the code throws an error because our function sum shares the same name as our global variable sum, which shares
// the same name as the parameter sum


// 4. Replace the invocation of countdown with an IIFE that produces the same results
// (function(start) {
//   while (start >= 0) {
//     console.log(start);
//     start -= 1;
//   }
// })(7);
// note that this way could mutate the start argument if it was a variable that was referenced

// 5. 
// is the named function inside in this IIFE accessible in the global scope?
// (function foo() {
//   console.log('Bar');
// })();

// foo();

// no it's not accessible in the global scope.
// will get a ReferenceError as foo won't be defined

// 6. 
// Consider the follow code from a practice problem in an earlier lesson:
// rewrite the code using an IIFE, no longer need the name foo;

// function foo(start) {
//   let prod = start;
//   return function(factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2);
// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// let bar = (function(start) {
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

// 7. Refactor problem 4 using recursion
// Tip: named functions created as IIFEs can be referenced by those same functions

(function countdown(start) {
  if (start >= 0) {
    console.log(start);
    start -= 1;
    countdown(start);
  }
})(7);

(function countdown(start) {
  console.log(start);

  if (start > 0) {
    countdown(start -1);
  }
})(7);