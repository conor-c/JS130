// This program should create and assign a random name to a robot

// from the examples, there should be a Robot class that is automatically
// initialized as a 5 character string where the first two characters 
// are capitalized letters and the last 3 characters are numbers
// EX: RA337, LK264, OP992

let Robot = (() => {
  const USED_NAMES = [];

  function randomName() {
    const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const NumberOfLetters = 2;
    const NumberOfDigits = 3;
    let name;
  
    do {
      name = '';
      for (let ltrCount = 1; ltrCount <= NumberOfLetters; ltrCount += 1) {
        name += Alphabet.charAt(Math.floor(Math.random() * Alphabet.length));
      }
      for (let numCount = 1; numCount <= NumberOfDigits; numCount += 1) {
        name += String(Math.floor(Math.random() * 10));
      }
    } while (USED_NAMES.includes(name));
  
    USED_NAMES.push(name);
    return name;
    // create and return a random name
  }
  
  return class Robot {
    constructor() {
      this.rngName = randomName();
    }
  
    name() {
      return this.rngName;
    }
  
    reset() {
      this.rngName = randomName();
    }
  }
})();
 
module.exports = Robot;

// let test = new Robot();
// console.log(test.name())
// console.log(test.name())
// console.log(test.reset())
// console.log(test.name())
// console.log(test.reset())
// console.log(USED_NAMES);
// console.log(test.reset())
// console.log(USED_NAMES);
// console.log(test.reset())
// console.log(USED_NAMES);
// console.log(test.reset())
// console.log(USED_NAMES);