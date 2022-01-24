'use strict';
// let p = new Promise((resolve, reject) => {
//   let a = 1 + 2;
//   if (a === 2) {
//     resolve("Success");
//   } else {
//     reject("failed");
//   }
// })

// p.then((message) => {
//   console.log(message);
// }, (message) => {
//   console.log(message + 'failed')
// }).catch((message) => {
//   console.log('this is in the catch ' + message);
// })

// const hasEmailOpen = true;
// const hasRedditOpen = false;

// // function studyCheck(callback, errorCallback) {
// //   if (hasEmailOpen) {
// //     errorCallback({
// //       name: 'Email Open',
// //       message: 'Close email!',
// //     });
// //   } else if (hasRedditOpen) {
// //     errorCallback({
// //       name: 'Reddit Open',
// //       message: 'Close reddit!',
// //     });
// //   } else {
// //     callback('Good job studying!');
// //   }
// // }

// function studyProblem(errorObj) {
//   console.log('Problem: ' + errorObj.name);
//   console.log('Solution: ' + errorObj.message);
// }

// function studySuccess(msg) {
//   console.log(msg);
// }

// // studyCheck((msg) => {
// //   console.log(msg);
// // }, studyProblem);

// // Above: Callback style || BELOW: Promise

// function studyCheck() {
//   return new Promise((resolve, reject) => {
//     if (hasEmailOpen) {
//       reject({
//         name: 'Email Open',
//         message: 'Close Email!',
//       });
//     } else if (hasRedditOpen) {
//       reject({
//         name: 'Reddit Open',
//         message: 'Close Reddit!',
//       });
//     } else {
//       resolve('Good job studying!');
//     }
//   })
// }

// // studyCheck().then(studyProblem, (msg) => console.log(msg));
// studyCheck().then(studySuccess, studyProblem);
// // studyCheck().then(studySuccess).catch(studyProblem);
// is it better to have a catch method or to just have one reject callback

// const saveVideoOne = new Promise((resolve, reject) => {
//   resolve('video 1 saved');
//   // reject('something wrong')

// })

// const saveVideoTwo = new Promise((resolve, reject) => {
//   resolve('video 2 saved');
// })

// const saveVideoThree = new Promise((resolve, reject) => {
//   resolve('video 3 saved');

// })


// Promise.all([
//   saveVideoOne,
//   saveVideoTwo,
//   saveVideoThree,
// ]).then((msgs) => console.log(msgs))
//   .catch((msg) => console.log(msg))

let promise1 = new Promise((resolve, reject) => {
  resolve('foo');
  // reject('a')
})
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(promise1).constructor))
// promise1
// .then(value => { return value + ' and 1'; })
// .then(value => { return value + ' and 2'; })
// .then(value => { return value + ' and 3'; })
// .then(value => { return value + ' and 4'; })
// .then(value => { console.log(value) })
// .catch(err => { console.log(err) });

// promise1 is set to a new Promise object, where the executor function is a callback,
// this executor function has two callback functions, one of which will be executed
// the body of the executor function determines which callback function will be executed,
// either the resolve callback, or the reject callback, this is determined by the executor function.

// after one of the callback functions is invoked, lets say resolve, the invocation of resolve
// is provided a value argument.
// go over the differences between the promise constructors executor function return values, and the return values of the then method.