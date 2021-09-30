function mapUsingReduce(array, callback, thisArg) {
  return array.reduce((mappedArray, currentValue) => {
    mappedArray.push(callback.call(thisArg, currentValue));
    return mappedArray;
  }, [])
}

let numbers = [1, 2, 3, 4, 5];
console.log(mapUsingReduce(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(mapUsingReduce(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(mapUsingReduce(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(mapUsingReduce(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]


let obj = {1: null}
let callback = function(value) {
  // console.log(`value: ${value}, index: ${index}, array: ${array}`)
    if (Object.keys(obj).length < value) {
      return value;
    }
    return "number isn't higher than this.length";
  }
console.log(mapUsingReduce(numbers, callback, obj))