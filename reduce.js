
function reduce(array, callback, initialValue) {
  let previousValue;

  if (initialValue) {
    previousValue = initialValue;
    for (let index = 0; index < array.length; index += 1) {
      let currentValue = array[index];
      previousValue = callback(previousValue, currentValue, index, array);
    }
  } else {
    previousValue = array[0];
    for (let index = 1; index < array.length; index += 1) {
      let currentValue = array[index];
      previousValue = callback(previousValue, currentValue, index, array);
    }
  }
  
  return previousValue;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]

let callbackTest = function(previous, current, index, array) {
  console.log(`Previous: ${previous}, Current: ${current}, Index: ${index}, Array: ${array}`);
  // previous[index] = current * 2;
  previous.push(current * 2)
  return previous
}

let result = reduce(numbers, callbackTest, [])
console.log(result)