function map(array, callback, thisArg) {
  let mappedArray = new Array(array.length);
  
  for (let index = 0; index < array.length; index += 1) {
    mappedArray[index] = callback.call(thisArg, array[index], index, array);
  }

  return mappedArray;
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

let obj = {1: null}
let callback = function(value, index, array) {
  // console.log(`value: ${value}, index: ${index}, array: ${array}`)
    if (Object.keys(obj).length < value) {
      return `${value}, ${index}, ${array}`;
    }
  }
console.log(map(numbers, callback, obj))