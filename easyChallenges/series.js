// given a string of digits, return all the possible consecutive number series of a given length

// "01234" has three 3 digit series
// 012, 123, 234
// and has two 4 digit series
// 0123, 1234
// if asked for a digit series greater than the length of the string, throw an error

// data structure
// from the tests, the result should be an array of arrays, where the inner arrays
// are possible consecutive number series

// algorithm
// the following class "Series"
// constructor input: A string of digits
// slices:
// input - a natural number integer
// output - an array of arrays that contains possible consecutive number series in order
//          the length of the number series is determined by the input to the method
// 1. check if the givenLength is longer than the numStr.length, if it is throw an error
// 2. starting from the first numStr digit, check if an array can be constructed of the required given length
// 3. if it can be, push it to the results array
// 4. if at any point it can't be, return the results array

let Series = (() => {
  function validateSeries(length, maxLength) {
    if (length > maxLength) {
      throw new Error("Provided length exceeds number sequences length")
    };
  }

  return class Series {
    constructor(numStr) {
      this.numSequence = numStr;
    }

    slices(givenLength) {
      validateSeries(givenLength, this.numSequence.length);

      let digits = this.numSequence.split('').map(str => parseInt(str, 10));
      let numSeries = [];
      let maxStartIdx = this.numSequence.length - givenLength; // if numStr is 5 length, and givenLength is 3,
                                                        // maxStartIdx would be 2 (element 3) (inclusive with slice) so theres
                                                        // still enough indices left. elements: 3, 4, 5 (aka length 3)

      for (let idx = 0; idx <= maxStartIdx; idx += 1) {
        let endIdx = idx + givenLength; 
        let subSeries = digits.slice(idx, endIdx);
        numSeries.push(subSeries);
      }

      return numSeries;
    }
  }
})();
 
module.exports = Series;