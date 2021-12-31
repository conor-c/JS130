/*  PROBLEM
Write a program to determine whether a triangle is equilateral, isosceles, or scalene
*/

/* INPUT
3 integers
*/

/* Output
a triangle class object that has a .kind method that returns a string
of the triangle type
*/

/*  Rules
equilateral triangle has all three sides the same length
isosceles triangle has exactly two sides the same length
scalene triangle has all sides of different lengths

** For a shape to be a triangle, all sides must be above length > 0
** And the sum of the lengths of any two sides must be greater than the length of the third side
*/

/* Questions

*/

// EXAMPLES/ TEST CASES


/* DATA STRUCTURE
A Class Triangle
*/

/* ALGORITHM
1. 
*/

// CODE
class Triangle {
  constructor(sideA, sideB, sideC) {
    class invalidTriangle extends Error {};

    this.sides = new Array(...arguments).sort((a, b) => a - b);

    if (!Triangle.isValidTriangle(this.sides)) {
      throw new invalidTriangle();
    }
  }

  static isValidTriangle(sides) {
    return sides.every(side => side > 0) && sides[0] + sides[1] > sides[2] ? true : false;
  }

  static findTriangleType(sides) {
    if (sides[0] === sides[1] && sides[1] === sides[2]) {
      return 'equilateral';
    } else if (sides[0] === sides[1] | sides[1] === sides[2]) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }

  kind() {
    return Triangle.findTriangleType(this.sides);
  }
}

module.exports = Triangle;

// let triangleTest = new Triangle(11, 10, 13);
// console.log(triangleTest);
// triangleTest.kind();