// Write code that uses closure to create private data.
// Explain why private data is desirable.
// Be able to identify code that gives users of your code a way to alter private data.

// Functions form closures that envelopes it's lexical environment

'use strict'

// function makeCounter() {
//   var count = 0; // function scoped
//   return function() {
//     count += 1;
//     console.log(count);
//   } // the returned function will close around the count variable because it is available in the outer scope
// }

// let test = makeCounter();
// test(); // 1
// test(); // 2
// let test2 = makeCounter();
// test2();
// console.log(count); // ReferenceError: count is undefined

// breakdown of above
// the variable makeCounter is assigned a function definition that contains the code between the open and closing brackets
// it is not executed at this time

// on line 17 we have a test variable that is assigned to the result of calling a function named "makeCounter()". 
// js searches for makeCounter() and finds it in the global scope

// makeCounter begins to run in a new local execution environment
// line 10 declares a function scoped 'count' variable and assigns it the the value of 0 in the local execution context
// line 11 we see a return of an anonymous function expression, it is not ran.

// that anonymous function expression is returned, but it is also returned with a closure, which closes around the count variable.
// because the count from the returned function expression is needed, the local execution context is not destroyed and remains on the call stack

// so now 'test' is equal to that returned anonymous function expression (and it's closure)
// that returned function still has not run

// finally on line 18 the function test() executed. It searches for the function definition and finds it as well as it's closure
// when searching for the variable count, it finds it in the outer scope / closure, and iterates on it.


// 1
// function makeCounterLogger(setNum) {
//   return (argNum) => {
//     let counter = setNum;

//     if (argNum >= setNum) {
//       while (counter <= argNum) {
//         console.log(counter);
//         counter += 1;
//       }
//     } else {
//       while (counter >= argNum) {
//         console.log(counter);
//         counter -= 1;r
//       }
//     }
//   }
// }

// let countLog = makeCounterLogger(5);
// countLog(8);
// countLog(2);

// 2
// * build todo
// makeList function, returns a new function that implements a todo list
// when called with an argument that is not already on the list, add it to the list
// when called with an arg that is on the list, remove from list
// when called without arg, print all items on the list
// if empty, print appropriate message

// function makeList() {
//   let list = [];
//   return (...args) => { // can later implement multiple args
//     if (args.length === 0) {
//       list.length ? list.forEach(todo => console.log(todo)) : console.log("The list is empty.");
//     } else if (list.includes(args[0])) {
//       list.splice(list.indexOf(args[0]), 1)
//       console.log(`Todo: "${args[0]}" has been removed from the list.`)
//     } else {
//       list.push(args[0]); 
//       console.log(`Todo: "${args[0]}" has been added to the list.`)
//     }
//   }
// }

// let list = makeList();
// list();

// list("make breakfast");

// list("read book");

// list();

// list("make breakfast");

// list();

// function makeList() {
//   let list = [];

//   function add(arg) {
//     list.push(arg);
//     console.log(`${arg} was added`);
//   }

//   function remove(arg) {
//     let index = list.indexOf(arg);

//     if (index !== -1) {
//       list.splice(index, 1);
//       console.log(`${arg} removed.`);
//     } else {
//       console.log(`${arg} not found.`)
//     }
//   }

//   function listTodo() {
//     list.length ? list.forEach(todo => console.log(todo)) : console.log("Empty.");
//   }

//   return {
//     add(arg) {
//       add(arg);
//     },

//     remove(arg) {
//       remove(arg);
//     },

//     list() {
//       listTodo();
//     },
//   }
// }

function makeList() {
  let list = [];

  return {
    add(arg) {
      list.push(arg);
      console.log(`${arg} was added`);
    }, 
    
    remove(arg) {
      let index = list.indexOf(arg);

      if (index !== -1) {
        list.splice(index, 1);
        console.log(`${arg} removed.`);
      } else {
        console.log(`${arg} not found.`)
      }
    },

    list() {
      list.length ? list.forEach(todo => console.log(todo)) : console.log("Empty.");
    },
  }
}

let list = makeList();
list.list();

list.add('read');
list.add('dont read');

list.list();

list.remove('read');
list.list();

console.log(Object.getOwnPropertyNames(list))