// The program should be able to convert an octal input string to a decimal output
// if given an invalid input, treat input string as octal 0

// Examples and Test Cases
// From the test suite, it can be determined that 
// there should be an "Octal" class, that takes an argument input string
// this class has one method, "toDecimal" that returns the decimal equivalent
// if this class is provided with an invalid octal string, it returns 0

// Data Structure
// it may be useful to break down the input string into it's component numbers in a collection
// and iterate through the elements while converting to decimal, for example

// Algorithm
// octal string '233' will get turned into [2, 3, 3], the length of the array is 3, as long as we can know
// the array only contains the proper numbers, we can iterate over the array, and use the length -1 to determine the starting exponent
// 
// the method toDecimal 
//  should have a helper function "isOctal" to determine if the input string is in fact an octal (no letters, no numbers 8 or 9)
//  if it's not, toDecimal should instantly return 0
//  otherwise split the input string into an array, and map each element into it's Number equivalent
//  then determine the length of the array, and begin iterating over the first element
//  the octal exponent (8**exponent) will start at the arrays length - 1, and decrease upon each iteration
//  once the iteration over the array is finished, return the result of summing all the products

let Octal = (() => {
  function isNotOctal(str) {
    return !!str.match(/[89a-zA-Z]/); // would be easier to check that every character is 0-7
  }

  return class Octal {
    constructor(octalStr) {
      this.octalStr = octalStr;
    }
  
    toDecimal() { // could of reversed the array instead of figuring out the starting exponent
      if (isNotOctal(this.octalStr)) return 0;

      let octalNumArray = this.octalStr.split('').map(strNum => Number(strNum));
      let startingExponent = octalNumArray.length - 1;
      return octalNumArray.reduce((sum, octalNum) => {
        let decimalEquivalent = octalNum * (8**startingExponent);
        startingExponent -= 1;
        return sum + decimalEquivalent;
      }, 0);
    }
  

  }
})();


module.exports = Octal;