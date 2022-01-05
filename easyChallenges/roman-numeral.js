/*  PROBLEM
convert whole integers into their roman numeral equivalent
*/

/* INPUT
an integer
*/

/* Output
a roman numeral equivalent
*/

/*  Rules
Romans don't have a symbol for zero
the numeral placement within a number can sometimes indicate subtraction rather
than addition
don't have to convert above 3000

one place before the next tier of roman symbols is constructed using subtraction instead of
addition
*/

/* Questions

*/

// EXAMPLES/ TEST CASES
// given the provided test cases, there should be a class 'RomanNumeral' that is initialized with an arabic integer
// which contains a method 'toRoman' that takes no argument but returns the Roman Numeral equivalent
// of the initialized value of RomanNumeral

/* DATA STRUCTURE
Perhaps a collection would be helpful in building the roman numeral and breaking down the arabic integer
*/

/* ALGORITHM
1. break down the integer into it's bases, 1's, 10's, 100's, 1000's
2. assign the roman numeral value to each base number
  2a. Add the roman numeral to the string as many times as its value can fit
  subtract the numeric value of the added roman numerals from the input value,
  use the new input value for next interaction
  EX:
    starting with 367
    we add CCC to the roman numeral
    new value is 67
    then we add LX to the roman numeral
    new value is 7
    then we add VII
    new value is zero, iteration ends
    return roman numeral
    (CCCLXVII)
3. assemble the roman numeral in order
*/

// CODE

class RomanNumeral {
  constructor(int) {
    this.integer = int;
  }

  static romanTiers = {
    1000: ['', 'M', 'MM', 'MMM'],
    100: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    10: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    1: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  }

  toRoman() {
    let numArr = new String(this.integer).split('').map(strNum => Number.parseInt(strNum));
    let romanNumeral = '';

    while (numArr.length !== 0) {
      if (numArr.length === 4) {
        let currentNum = numArr.shift();
        romanNumeral += RomanNumeral.romanTiers[1000][currentNum];
      } else if (numArr.length === 3) {
        let currentNum = numArr.shift();
        romanNumeral += RomanNumeral.romanTiers[100][currentNum];
      } else if (numArr.length === 2) {
        let currentNum = numArr.shift();
        romanNumeral += RomanNumeral.romanTiers[10][currentNum];
      } else {
        let currentNum = numArr.shift();
        romanNumeral += RomanNumeral.romanTiers[1][currentNum];
      }
    };

    return romanNumeral;
  }
}

module.exports = RomanNumeral;

