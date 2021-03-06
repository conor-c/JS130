// // Most of the regex methods are methods on the String class, not the RegExp class

// // the .match method returns a value that indicates whether a match occurred, and what substrings
// // matched. The return value is "truthy"

// let text = 'https://www.launchschool.com';
// function fetchUrl(text) {
//   console.log(text + ' has been fetched');
// }

// if (text.match(/^https?:\/\/\S+$/)) {
//   fetchUrl(text);
// }

// console.log(text.match(/^https?:\/\/\S+$/));
// text = '2';
// console.log(text.match(/^https?:\/\/\S+$/));

// // let record = "xyzzy\t3456\t334\tabc";
// // let fields = record.split("\t");
// // console.log(fields)

// let record = "xyzzy 3456 \t 334\t\t\tabc";
// let fields = record.split(/\s+/);
// console.log(fields);
// console.log(record);


// let test = 'a string with \'single quotes\' and "double quotes" and another double quote"';
// console.log(test);
// let matched = test.replace(/(["']).+?\1/g, "$1REDACTED$1");
// console.log(matched);
// console.log(test)

// const isUrl = function(text) {
//   if (text.match(/^https?:\/\/\S+$/)) {
//     console.log('true');
//   } else {
//     console.log('false');
//   }
// }

// isUrl('http://launchschool.com');   // -> true
// isUrl('https://example.com');       // -> true
// isUrl('https://example.com hello'); // -> false
// isUrl('   https://example.com');    // -> false

// let fields = function(string) {
//   //  console.log(string.split(/[ ,\t]+/));
//    return string.split(/[ ,\t]+/);
// }

// fields("Pete,201,Student");
// // -> ['Pete', '201', 'Student']

// fields("Pete \t 201    ,  TA");
// // -> ['Pete', '201', 'TA']

// fields("Pete \t 201");
// // -> ['Pete', '201']

// fields("Pete \n 201");
// // -> ['Pete', '\n', '201']

// Write a method that changes the first arithmetic operator (+, -, *, /)
// in a string to a '?' and returns the resulting string.
// Don't modify the original string.
// let mysteryMath = function(str) {
//   // return str.replace(/[+-*\/]?/, "?");
//   console.log(str.replace(/[\+\-\*\/]/, '?'));
// }
// mysteryMath('4 + 3 - 5 = 2');
// // -> '4 ? 3 - 5 = 2'

// mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// -> '(4 ? 3 + 2) / 7 - 1 = 1'

// 4. Write a method that changes every arithmetic operator to a ?.

// let mysteriousMath = function(equation) {
//   console.log(equation.replace(/[\+\-\*\/]/g, '?'));
// }

// mysteriousMath('4 + 3 - 5 = 2');           // -> '4 ? 3 ? 5 = 2'
// mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'

// 5. 
// let danish = function(str) {
//   console.log(str.replace(/\b(apple|blueberry|cherry)\b/, 'danish'));
// }
// danish('An apple a day keeps the doctor away');
// // -> 'An danish a day keeps the doctor away'

// danish('My favorite is blueberry pie');
// // -> 'My favorite is danish pie'

// danish('The cherry of my eye');
// // -> 'The danish of my eye'

// danish('apple. cherry. blueberry.');
// // -> 'danish. cherry. blueberry.'

// danish('I love pineapple');
// // -> 'I love pineapple'

let formatDate = function(dateStr) {
  console.log(dateStr.replace(/^(\d{4})([\-\/])(\d{2})\2(\d{2})$/, '$4.$3.$1'));
}
formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2016/06/17'); // -> '2016/06/17' (no change)