/*  PROBLEM
Calculate the "hamming Distance" between two homologous dna strands
*/

/* INPUT
the DNA class will get a strand of dna in the form of a string
and a method on that class will get another strand in the form of a string
*/

/* Output
the output should be an integer
*/

/*  Rules
the hamming distance is only defined for sequences of equal length
if the two sequences are of unequal length, take the shorter length and compute the hamming distance
over that length
*/

/* Questions

*/

// EXAMPLES/ TEST CASES
// provided jest file

/* DATA STRUCTURE

*/

/* ALGORITHM
1. create DNA class with given dna sequence
2. must have method named ".hammingDistance" that will take a sequence

compare the two strings, over the length of the shortest sequence
how to find the shortest sequence
return the number of differences by iterating through the shortest sequence
and comparing each index to the other sequence
*/

// CODE
class DNA {
  constructor(sequence) {
    this.sequence = sequence;
  }

  hammingDistance(newSequence) {
    let shortestSequence;
    let secondSequence;
    let hammingDistance = 0;

    // would be easier to just have a minLength variable that equals the shortest length
    // and stop the for loop when the counter reaches that length
    newSequence.length >= this.sequence.length ? 
        [shortestSequence, secondSequence] = [this.sequence, newSequence]
      : [shortestSequence, secondSequence] = [newSequence, this.sequence];

    for (let sequenceIndex = 0; sequenceIndex < shortestSequence.length; sequenceIndex += 1) {
      if (shortestSequence[sequenceIndex] !== secondSequence[sequenceIndex]) {
        hammingDistance += 1;
      }
    }

    return hammingDistance;
  }
}

module.exports = DNA;