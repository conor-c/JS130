/*  PROBLEM
given a word, compute the scrabble score for that word
*/

/* INPUT
a string or null provided to an initialization of the Scrabble class
*/

/* Output
the method .score should output an integer score 0 or above
*/

/*  Rules
not calculating based on a board bonus, simple word values
add the values of the letters to get the score
  (1 point)-A, E, I, O, U, L, N, S, T, R
  (2 points)-D, G
  (3 points)-B, C, M, P
  (4 points)-F, H, V, W, Y
  (5 points)-K
  (8 points)- J, X
  (10 points)-Q, Z
*/

/* Questions

*/

// EXAMPLES/ TEST CASES


/* DATA STRUCTURE
a class object "Scrabble" that has a method score that returns an integer
*/

/* ALGORITHM
1. determine if input is a valid string
  if not, score will be zero
  remove whitespace characters \t\n
2. iterate through the string, on each letter encounter, add the point value to the total result
*/

// CODE

class Scrabble {
  static ScoreValues = {
    a: 1, e: 1, i: 1, o: 1, u: 1,
    l: 1, n: 1, s: 1, t: 1, r: 1,
    d: 2, g: 2, b: 3, c: 3, m: 3,
    p: 3, f: 4, h: 4, v: 4, w: 4,
    y: 4, k: 5, j: 8, x: 8, q: 10,
    z: 10,
  }

  constructor(word) {
    this.word = word;
  }

  static score(word) {
    return new Scrabble(word).score();
  }

  score() {
    if (this.isValidWord(this.word)) {
      return this.word.toLowerCase().split('').reduce((sum, letter) => {
        return sum + Scrabble.ScoreValues[letter];
      }, 0);
    } else {
      return 0;
    }
  }

  isValidWord(word) {
    if (typeof this.word !== 'string' || !word.match(/^[a-zA-Z]+$/)) {
      return false;
    }
    return true;
  }
}

console.log(Scrabble.score('test'))

module.exports = Scrabble;