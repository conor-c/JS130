/*  PROBLEM
Detect anagrams of a word in a given set of strings
*/

/* INPUT
an array of strings to be matched against a provided string
*/

/* Output
an array of strings that are anagrams of the provided string
*/

/*  Rules
if there are no anagrams, return an empty array
anagrams ignore case
an identical word is not an anagram
*/

/* Questions

*/

// EXAMPLES/ TEST CASES


/* DATA STRUCTURE
a class "Anagram"
  has a constructor that takes a single string

  has a method called "match" that takes an array of strings 
*/

/* ALGORITHM
1. create a new object from the class anagram with a given string
2. match the provided array of strings against the anagram.
    iterate over the provided array in match
    for each element, check if the element is of equal length to the base string
      if it is not, move on to next element
    begin iterating over the element by letter,
      for each letter, check if it is contained within the base string
        if it is not, move on to the next element/string
      when finding a matching letter in base string, remove one count of that letter from the base string
    if successfully iterates over the element/string, add it to a results array,
    move on to the next string to check

    // OR JUST SORT THE WORDS BY CHARACTER AND SEE IF THEY MATCH EXACTLY...
*/

// CODE

class Anagram {
  constructor(str) {
    this.baseWord = str;
  }

  match(strArray) {
    return strArray.filter(word => {
      return word.length === this.baseWord.length && word.toLowerCase() !== this.baseWord.toLowerCase();
    }).filter(word => {
      let strToMatch = this.baseWord.toLowerCase();

      return word.split('').every(letter => {
        let searchLetter = letter.toLowerCase();

        if (strToMatch.includes(searchLetter)) {
          strToMatch = strToMatch.replace(searchLetter, "");
          return true;
        } else {
          return false;
        }
      });
    });
  };
}

module.exports = Anagram;

// let detector = new Anagram('master');
// let anagrams = detector.match(['stream', 'pigeon', 'masters']);
// console.log(anagrams);