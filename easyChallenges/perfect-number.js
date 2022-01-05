// Understanding the Problem
/*
There is a classification scheme for natural numbers (integers 1 - infinity)

They belong to three categories based on the number and its sum of positive divisors,
the sum of it's positive divisors is called the Aliquot Sum
 ** A positive divisor is a number that can be evenly divided with no remainder (excluding the actual number)

Perfect: has an Aliquot sum that is equal to the original number
Abundant: has an Aliquot sum that is greater than the original number
Deficient: has an Aliquot sum that is less than the original number
*/

// Examples and Test Cases
/*
6 is a perfect number, it has positive divisors of 1, 2, and 3, which makes its Aliquot sum 6
28 is a perfect number, 1, 2, 4, 7, and 14 = 28
15 is a deficient number, 1, 3, 5 = 9
24 is an abundant number, 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36
 ** prime numbers are always deficient since their only divisor is 1

From our test cases:
class PerfectNumber
  * must have a method named classify that takes an integer argument
    will throw an error if the integer is not a natural number
    Otherwise, returns a string of it's classification
*/

// Data Structures
/*
while finding a numbers positive divisors, it would be helpful to store them in a collection for easy addition after
*/

// Algorithm
/*
Is 1 a perfect number?

every natural number will be divisible by 1, so we can start our iteration at 2
take the num and % by 2, if it divides with zero remainder, add it to a results array
increase the divisor by 1, if it divides with zero remainder, add it to a results array
if at any point the divisor is equal to the num, stop
once stopped, sum the results array's elements and determine if it is less than, equal to, or above
the num
return the relating string
*/

class PerfectNumber {
  constructor() {

  }

  static classify(naturalNum) {
    if (!Number.isInteger(naturalNum) || naturalNum <= 0) {
      throw new TypeError('not a naturalNumber');
    }

    let perfectDivisors = [1];
    for (let divisor = 2; divisor < naturalNum; divisor += 1) {
      if (naturalNum % divisor === 0) {
        perfectDivisors.push(divisor);
      }
    }

    let aliquotSum = perfectDivisors.reduce((sum, divisor) => {
      return sum += divisor;
    }, 0)

    if (aliquotSum < naturalNum) return 'deficient';
    if (aliquotSum > naturalNum) return 'abundant';
    if (aliquotSum === naturalNum) return 'perfect';
  }
}

module.exports = PerfectNumber;

// breaking the method into another helper method would improve readability 