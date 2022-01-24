// the setTimeout function is one of the most basic ways to demonstrate asynchronous code.
// It takes two arguments, a callback, and a a delay in milliseconds to wait before executing the callback
// function
// Note: setTimeout isn't part of the official JS spec, but most environments make it available

setTimeout(() => console.log('3rd'), 5000);
setTimeout(() => console.log('2nd'), 2500);
setTimeout(() => console.log('1st'), 1000);

// A very interesting thing about setTimeout is that due to the way the event loop and task queue work,
// setTimeout functions will not even begin to run until the program has no more code to run. 

setTimeout(() => console.log('2nd'), 0);
setTimeout(() => console.log('third'), 0);
console.log('actual first');