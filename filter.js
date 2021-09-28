"use strict"
function filter(array, callback, thisArg) {
  let filteredArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (callback.call(thisArg, array[index], index, array)) { //keep in mind that the callback doesn't need to specify a 'this' parameter
      filteredArray.push(array[index]);                       //.call() just sets the execution context, so the callback can use "this"
    }
  }

  return filteredArray;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

let obj = {
  2: true,
}

let callback = function(value, index, array) {
// console.log(`value: ${value}, index: ${index}, array: ${array}`)
  if (Object.keys(obj).length < value) {
    return true;
  }
}
console.log(filter(numbers, callback, obj))
