// function concatArrays(array1, array2) {
//   return [...array1, ...array2]; //spread operator, only 2 arrays
// }

function concatArrays(...arrays) { //using rest parameters
  // return [...arrays].flat(); 

  return arrays.reduce((combinedArray, currentArray) => {
    combinedArray.push(...currentArray);
    return combinedArray;
  },[])
}
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array4 = ['g', 'h', 'a'];
const array3 = concatArrays(array1, array2, array4);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
