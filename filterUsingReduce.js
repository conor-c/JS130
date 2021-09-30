function filterUsingReduce(array, callback, thisArg) {
  // let filteredArr = [];

  // array.reduce((previous, current) => {
  //   callback.call(thisArg, current) ? filteredArr.push(current) : filteredArr;
  // }, filteredArr)

  // return filteredArr;




  return array.reduce((filteredArray, currentValue) => {
    if (callback.call(thisArg, currentValue)) {
      filteredArray.push(currentValue);
    }
    return filteredArray;
  }, [])
}

let numbers = [1, 2, 3, 4, 5];
console.log(filterUsingReduce(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filterUsingReduce(numbers, number => number < 0)); // => []
console.log(filterUsingReduce(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filterUsingReduce(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

let obj = {
  1: true,
  2: true,
}

let callback = function(value, index, array) {
// console.log(`value: ${value}, index: ${index}, array: ${array}`)
  if (Object.keys(obj).length < value) {
    return true;
  }
}
console.log(filterUsingReduce(numbers, callback, obj)) // [3, 4, 5]
console.log(numbers)