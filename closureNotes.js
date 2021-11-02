// // // function makeCounter() {
// // //   let counter = 0;

// // //   return function() {
// // //     counter += 1;
// // //     return counter;
// // //   }
// // // }

// // // let incrementCounter = makeCounter();

// // // console.log(incrementCounter());
// // // console.log(incrementCounter());
// // // console.log(counter);

// // // // this demonstrates Closure because makeCounter is returning a function
// // // // that envelopes the variable counter in a closure
// // // // the variable "counter" is out of scope, but we can still access it
// // // // and manipulate it with the incrementCounter variable

// // let incrementCounter1 = makeCounter();
// // let incrementCounter2 = makeCounter();

// // console.log(incrementCounter1()); // 1
// // console.log(incrementCounter1()); // 2
// // console.log(incrementCounter1()); // 3

// // console.log(incrementCounter2()); // 1
// // console.log(incrementCounter2()); // 2

// // console.log(incrementCounter1()); // 4

// // // Each of the closures get its own copy of counter, because each
// // // invocation of "makeCounter()" creates a new local variable "counter"

// // Returning two functions that close over the same variable (at the same time)

// function makeCounter() {
//   let counter = 0;

//   const func1 = function() {
//     counter += 1;
//     return counter;
//   }

//   const func2 = function() {
//     counter += 2;
//     return counter;
//   }

//   return [func1, func2];
// }

// let funs = makeCounter();
// let fun1 = funs[0];
// let fun2 = funs[1];

// console.log(fun1()); // 1
// console.log(fun2()); // 3

// // in this instance both of the returned functions close over the same
// // local variable of counter, so they share it

// let oddNumbers = [];
// let array = [1, 2, 3];
// array.forEach(number => {
//   if (number % 2 === 1) {
//     oddNumbers.push(number);
//   }
// });

// here the callback function forms a closure that closes over the oddNumbers
// array, this is obvious when we consider that the .forEach method operates
// out of scope of our main program body (deep in JS implementation)

// CLOSURES are purely lexically based. They are not determined by execution
// unlike the value of this

// Partial Function Application

// function add(first, second) {
//   return first + second;
// }

// function makeAdder(firstNumber) {
//   return function(secondNumber) {
//     return add(firstNumber, secondNumber);
//   };
// } // the returned function closes around the add function, and will
// // permanently pass to it whatever "firstNumber" the makeAdder() function
// // is called with

// let addFive = makeAdder(5);
// let addTen = makeAdder(10);

// console.log(addFive(4)); // 9
// console.log(addFive(5)); // 10

// console.log(addTen(10)); // 20
// console.log(addTen(0)); // 10

// so we define the first argument to the closed add function upon
// invoking the makeAdder() function, but the second argument is only passed
// when we call the returned anonymous function(that closed around the add function)

// "makeAdder()" is using partial function application. It is used to apply
// some of the functions arguments (the add functions first # argument) when
// makeAdder is called, and applies the rest of the arguments when the returned
// function is called.

// "Partial function application refers to the creation of a function that can
// call a second function with fewer arguments than the second function expects. 
// The created function applies the remaining arguments."

// function download(locationOfFile, errorHandler) {
//   // attempt to download the file
//   let gotError = true;
//   let reasonCode = 'it messed up';

//   if (gotError) {
//     errorHandler(reasonCode);
//   }
// }

// function errorDetected(url, reason) { // the errorHandler
//   // handle the error
//   console.log('url:');
//   console.log(url);
//   console.log('reason:');
//   console.log(reason);
// }

// // // download("https://example.com/foo.txt", /* ? */);

// // // here we have a download function that expects the location of the file
// // // as the first argument, and a callback function that will handle any
// // // potential errors

// // // the problem as it stands is that our callback function for the errorHandler
// // // "errorDetected" requires two arguments, the url, and a reason.
// // // currently the download function is only passing it one argument, the reason
// // // (and in the wrong place as well)
// // // if download was our function and we could edit it, it would merely be a matter
// // // of passing changing line 118 to "errorHandler(locationOfFile, reasonCode)";
// // // but if we can't change the download function, what are we to do?
// // // In comes "Partial Function Application"

// // function makeErrorHandlerFor(locationOfFile) {
// //   return function(reason) {
// //     errorDetected(locationOfFile, reason);
// //   };
// // } // this partial function application will return a function with the 
// // // locationOfFile variable enclosed. And then you can pass the second argument
// // // "reason", upon calling of the returned function (which calls errorDetected)

// let url = "https://example.com/foo.txt";
// // download(url, makeErrorHandlerFor(url))
// // // we pass the partial application function "makeErrorHandlerFor(url)
// // // which returns a function that already assigns the first argument,
// // // "locationOfFile", so that when the error occurs in the download function
// // // the returned function only needs to accept the second argument, "reason"
// // // when it's called."

// // .bind() can also be used to perform partial function application
// // in this case you wouldn't want to create that 'test' variable, 
// // because the url will be permanently whatever the value was at time of binding.

// let test = errorDetected.bind(null, url)
// download(url, test);


// partial function application == partial function == partially applied


// in order to have partial function application, a reduction in the number
// of arguments you have to provide when you call a function must occur.

// *If the number of arguments isn't reduced, it's not a partial function
// application.


