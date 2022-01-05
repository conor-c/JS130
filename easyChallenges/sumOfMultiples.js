// problem
// return the sum of a collection of numbers that are multiples
// of a given set of numbers (default 3, 5) while still being less
// than a given number

// examples / test cases
// input: a natural number, and a set of one or more other numbers (default 3 & 5)
// output: the sum of the multiples of the set of numbers while being less than the natural number
// example: natural number: 20, set of numbers: [3, 5]
//        return 78
//        calculated by the sum of [3, 5, 6, 9, 10, 12, 15, 18]
//
// from the provided test suite:
// create a class "SumOfMultiples"
// with a method named 'to' that returns the sum of multiples and is provided the natural number limit
// also a static method named 'to'
// that static method will only need to operate with the default set of numbers 3 & 5
// this method should be able to deal with large numbers, so time complexity should be taken into account

// Data Structure
// it would be good to collect the constructor argument (the num set) into an array using
// the rest operator, because the amount of numbers is variable

// it also will likely be helpful to have all multiples found to be stored in a collection so
// they can be used in subsequent iterations

// algorithm
// the simplest way to find each multiple would be to start from 1 and iterate over each subsequent natural
// number while checking if the number can be divided by any setNum number with a remainder of 0 (using %)
// the problem with this algorithm is that if the numLimit is 10000 then that is 10000 calculations for each setNum
//
// if the numSet numbers are less than the numLimit, they will be contained within the result
// a multiple can only occur by multiplying the numSet number by 2 or more
//
// sort the array, smallest numbers at the beginning
// starting at 1, multiple the first setNum number by 1, check if product is less than the numLimit
// if it is, push it to the result array
// do this until the product is equal to or greater than the numLimit

// for the next setNum number, do the same thing, but after finding each product, check if the number can be divided by
// the previous numSet number with a remainder of 0, if it can be, that means that number has already been found
// the above is flawed logic, just because the previous numSet number isn't divided evenly, doesn't mean the one before that
// wouldn't be, meaning you can have duplicates that would lead to an error.
// either check that all previously iterated numSet numbers are not evenly divided by, or you have to search addends array to see
// if it contains the number,

// currently we are iterating over each number in the numSet
// but we are not increasing the multiplier

let SumOfMultiples = (() => {
  function previouslyFound(potentialNum, oldMultiplicands) {
    return oldMultiplicands.some(numSetNum => {
      return potentialNum % numSetNum === 0;
    });
  }

  return class SumOfMultiples {
    constructor(...numSet) {
      this.numSet = numSet;
    }
  
    static to(numLimit) {
      return new SumOfMultiples(3, 5).to(numLimit);
    }
  
    to(numLimit) {
      let addends = [];
      let oldMultiplicands = [];
      
      for (let idx = 0; idx < this.numSet.length; idx += 1) {
        let currentMultiplicand = this.numSet[idx];
        let multiplier = 1;
        let product = currentMultiplicand * multiplier;
  
        while (product < numLimit) {
          if (!previouslyFound(product, oldMultiplicands)) {
            addends.push(product);
          }
          multiplier += 1;
          product = currentMultiplicand * multiplier;
        }
        oldMultiplicands.push(currentMultiplicand);
      }
  
      return addends.reduce((sum, num) => sum + num, 0)
    }
  }
})();


// class SumOfMultiples {
//   constructor(...multiples) {
//     this.multiples = (multiples.length > 0) ? multiples : [3, 5];
//   }

//   static to(num) {
//     let obj = new SumOfMultiples();
//     return obj.to(num);
//   }

//   to(num) {
//     let addends = [];

//     for (let currentNum = 1; currentNum < num; currentNum++) {
//       console.log(currentNum)
//       if (this.anyMultiple(currentNum)) {
//         addends.push(currentNum);
//       }
//     }

//     return addends.reduce((acc, addend) => acc + addend, 0);
//   }

//   anyMultiple(num) {
//     return this.multiples.some(multiple => {
//       return num % multiple === 0;
//     });
//   }
// }

// let obj = new SumOfMultiples(5, 6, 8);
// console.log(obj.to(150));

module.exports = SumOfMultiples;