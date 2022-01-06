// This problem has one important input, a letter that will be at the widest point
// the diamond created has the following rules:
// the first row must contain one 'A'
// the last row must contain one 'A'
// All rows, except the first and last must have two identical letters
// the diamond is horizontally and vertically symmetric
// the diamond has a square shape, width equals height
// the letters form a diamond shape
// the top half has letters in ascending order
// the bottom half has the letters in descending order
// the corners containing the spaces are triangles

// examples / test cases
// from the test cases
// requires: Diamond class
// methods: makeDiamond
        // input: one capitalized letter
        // output: a diamond
// it might be helpful to have some helper methods that can create rows

// data structure
// lots of string manipulation, potentially a collection to store the building diamond would be helpful
// a collection that stores the top half of the triangle, a string for the middle (the ltr line), and the bottom
// pyramid can be created by reversing the top half collection

// algorithm
// notes: the shape of the diamond in relation to the letters will always be static
// an A will always be in the center
// a B will always have one space between each B
// a C will always have three spaces between each C
// D will have 5
// E will have 7
// etc
// the provided ltr determines the length of the lines
// the length of the lines determines the amount of spaces on subsequent lines
// but it's in relation to the inner spaces
// just keep in mind the letters take up two spaces

let Diamond = (() => {
  let lineValues = {
    A: 0, B: 1, C: 3, D: 5, E: 7,
    F: 9, G: 11, H: 13, I: 15, J: 17,
    K: 19, L: 21, M: 23, N: 25, O: 27,
    P: 29, Q: 31, R: 33, S: 35, T: 37,
    U: 39, V: 41, W: 43, X: 45, Y: 47,
    Z: 49,
  }
  
  
  return class Diamond {
    static makeDiamond(ltr) {
      if (ltr === 'A') return 'A\n';
      let maxLength = lineValues[ltr] + 2;
      let maxIdx = Object.entries(lineValues).findIndex(arr => arr[0] === ltr);
  
      let topRows = Object.entries(lineValues).slice(0, maxIdx);
      let middleRow = [Object.entries(lineValues)[maxIdx]];
      let bottomRows = topRows.slice().reverse();
  
      return [...topRows, ...middleRow, ...bottomRows].map(ltrArr => {
        let outsideNum;
        let letter = ltrArr[0];
        let insideNum = ltrArr[1];
        switch (ltrArr[0]) {
          case ltr:
            return `${letter}${' '.repeat(insideNum)}${letter}\n`;
          case 'A':
            outsideNum = (maxLength - 1) / 2;
            return `${' '.repeat(outsideNum)}${letter}${' '.repeat(outsideNum)}\n`
          default:
            outsideNum = (maxLength - (2 + insideNum)) / 2;
            return `${' '.repeat(outsideNum)}${letter}${' '.repeat(insideNum)}${letter}${' '.repeat(outsideNum)}\n`;
        }
      }).join('');
    }
  }
})();

module.exports = Diamond;
