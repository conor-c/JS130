// What are exceptions?
// Given an exception error message, identify the exception type and understand the meaning.
// Understand the terms raise, throw, re-throw, and catch.
// Know the syntax for the throw and try/catch statements
// Understand the program flow for an exception

// the term exception is more specific than the term error, errors/exceptions can be thrown/raised

// Exceptions, like ReferenceError, TypeError, and SyntaxError, are specific types of errors
// that occur when something goes wrong. Usually they will terminate a program

// A programmer can account for exceptions being raised by creating an exception handler
// the exception handler is in the form of try/catch statements
// the try block runs the code that might raise an exception
// and the catch block tries to remedy the exception

// errors can be raised, and often are, in response to an invalid input
// it doesn't typically terminate the program unless thats intended. Instead
// a programmer can raise an error message and attempt to validate the information

// Exceptions are generally an object of the Error type.
// The built in exceptions of the Error type are:
// EvalError
// RangeError
// ReferenceError
// SyntaxError
// TypeError
// URIError
// AggregateError

// the constructor for creating a new Error object is "Error()"

// When wishing to throw an error, you generally would not use a built in error type,
// those are typically thrown automatically when JS detects something it doesn't like
// instead you would throw a "generic error", that looks something like this

// function divide(first, second) {
//   if (second === 0) {
//     throw new Error("Can't divide by zero!");;
//   }

//   return first / second;
// }

// let result = divide(1, 0); // Error: Can't divide by zero!
// console.log(result); // this line doesn't get run because the program has halted
// because we didn't have an exception handler, we didn't have a 'catch'

// Remember that the Error object is a constructor, with 7 built in types
// the "throw new Error("can't divide by zero!"); line could just as easily called one of the 
// built in types:
// throw new RangeError("can't divide by zero!"); // would now throw a RangeError type
// throw can throw any error type, it can even throw primitive values or other objects
// throw 'I got thrown' would still halt the program

// Creating a new type of Error message

// class CustomErrorNoZerosAllowed extends Error {}

// function divide(first, second) {
//   if (second === 0) {
//     throw new CustomErrorNoZerosAllowed("Can't divide by zero!");
//   }

//   return first / second;
// }

// let result = divide(1, 0); // CustomErrorNoZerosAllowed: Can't divide by zero!
// console.log(result) // remember this doesn't get run because the program halts

// What good is throwing an Error message if you can't handle it? You handle it by 
// catching it. Error is thrown. you can't it. program continues 

// class DivideByZeroError extends Error {};

// function divide(firstNum, secondNum) {
//   try {
//     if (secondNum === 0) {
//       throw new DivideByZeroError("Can't divide by zero");
//     } else {
//       return firstNum / secondNum;
//     }
//   } catch (error) { // 'error' is an optional identifier that holds the exception object for the associated try...catch block
//     if (error instanceof DivideByZeroError) {
//       console.log(`${error.message} ignored`);
//     } else {
//       throw error;
//     }
//   }
// } // a function that will throw a DivideByZeroError type, if the second number is zero

// // Issue: the `error' identifier that is serving as the catch argument, is being set to undefined
// // I believe this is because the catch block does not have access to the inner if {} blocks scope
// // Answer: I had previous tried to access DivideByZeroError.message, when I needed to access the 
// // message property of `error`
// divide(1, 0);
// console.log(divide(3, 1));

// Important that when trying to catch a specific error, you catch it specifically, and let all
// other errors go. As seen with the else statement, if the error that was caught is not the specific
// one "DivideByZeroError" we were trying to handle, the else statement "re-throws" the error, which is
// basically just letting the error occur

// only try to catch exceptions for exceptional conditions, if it can be handled using flow control, do that
// instead. Rules of thumb: if the problem can be handled in local code, or if it's normal/expect part of 
// flow control. Do not use an exception

// for instead in the divide program, we can easily just have a flow control that directs the program to log
// an error message without throwing an exception.

// If the program needed to load a file however, and the file can't be found, that might be time to throw an exception,
// an even potentially catch it if there is a way to resolve the issue

// ONLY catch an error if you can do something to recover from it, otherwise just re-throw the error

// the less you do with a catch block, the better. be sure that when catching an exception, you don't
// do anything that could potentially cause another exception.

// THROW: when you can't ignore the problem, and can't recover from it in local code
// CATCH: on rare occasions you can do something to recover
// mainly, do everything possible to prevent exceptions, and only catch them if you can fix a specific problem