// Most of the regex methods are methods on the String class, not the RegExp class

// the .match method returns a value that indicates whether a match occurred, and what substrings
// matched. The return value is "truthy"

let text = 'https://www.launchschool.com';
function fetchUrl(text) {
  console.log(text + ' has been fetched');
}

if (text.match(/^https?:\/\/\S+$/)) {
  fetchUrl(text);
}

console.log(text.match(/^https?:\/\/\S+$/));
text = '2';
console.log(text.match(/^https?:\/\/\S+$/));

// let record = "xyzzy\t3456\t334\tabc";
// let fields = record.split("\t");
// console.log(fields)

let record = "xyzzy 3456 \t 334\t\t\tabc";
let fields = record.split(/\s+/);
console.log(fields);
console.log(record);