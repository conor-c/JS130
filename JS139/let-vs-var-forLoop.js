function _forLoopStatement(delay) {
  console.log('setTimeout with delay of: ' + delay + ' queued');
  setTimeout(() => console.log(delay), delay * 1000);
}

// // 11 gets logged 10 times because each anonymous callback function call has
// // formed a closure around the same function-scoped variable, that at time
// // of execution is equal to 11
// function delayLog() {
//   for (var delay = 1; delay <= 10; delay += 1) {
//     console.log('setTimeout with delay of: ' + delay + ' queued');
//     setTimeout(() => console.log(delay), delay * 1000);
//   }
// }


// this function shows what happens when `let` is used to declare the delay
// variable. each iteration of the for loop statement creates its own
// scope, and forms a closure around the argument `delay` which has been passed
// by value into the _forLoopStatement function. So when it comes time to 
// execute the console.log, it looks to it's closure which as formed around that 
// argument.
function delayLog() {
  for (var delay = 1; delay <= 10; delay += 1) {
    _forLoopStatement(delay);
  }
}



delayLog();




