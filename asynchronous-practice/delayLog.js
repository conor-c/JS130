// function delayLog() {
//   for (let waitTime = 1000; waitTime <= 10000; waitTime += 1000) {
//     setTimeout(() => console.log(waitTime/1000), waitTime);
//   }
//   console.log('for loop done');
// }

// delayLog();

function delayLog() {
  for (let delay = 1; delay <= 10; delay += 1) {
    setTimeout(() => console.log(delay), delay * 1000);
  }
}

delayLog();

// var sets the delay variable to be function scope, not block scope.
// for loop runs 10 times,
// 1. setTimeout is given a callback, and sets the delay to be the current value of delay according to the loop (1 * 1000)
//    --- the callback is a console.log that requires the variable delay, so it forms a closure around that variable.
// 2. ... wait is now 2000
//    --- the callback forms a closure around the variable delay, which is function scoped, so it shares the same variable as the first loop.
// finally the loop ends, and the program runs out of code to execute, so setTimeout can begin
// running their callbacks. when it looks to delay, each timeout is sharing the same variable, which is now 11.

//  


// setTimeout(function() {   // 1
//   console.log('Once');    // 5
// }, 1000);

// setTimeout(function() {   // 2
//   console.log('upon');    // 7
// }, 3000);

// setTimeout(function() {   // 3
//   console.log('a');       // 6
// }, 2000);

// setTimeout(function() {   // 4
//   console.log('time');    // 8
// }, 4000);

setTimeout(function() {
  setTimeout(function() {
    q();                    // 7
  }, 15);

  d();                      // 3

  setTimeout(function() {
    n();                     // 5
  }, 5);

  z();                       // 4
}, 10);

setTimeout(function() {
  s();                      // 6
}, 20);

setTimeout(function() {
  f();                          // 2
});

g();                          // 1

// g(), f(), d(), z(), n(), s(), q()