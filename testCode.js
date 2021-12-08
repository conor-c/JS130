// let val = 7
// function createAdder() {
//   function addNumbers(a, b) {
//     let ret = a + b
//     return ret
//   }
//   return addNumbers
// }
// let adder = createAdder()
// let sum = adder(val, 8)
// console.log('example of function returning a function: ', sum)

/*
Step 1: let is seen, we know a identifier is about to be declared
It's name is 'val' and it is in the TDZ until execution
Later we seen an assignment operator and a value of 7
It's scope is global

line 2 a variable 'createAdder' is declared, a function definition is
assigned to it, lines 3 - 8 are what makes up the function, and are
what makes up the function definition

line 9 we see a let declaration, the name adder is declared and assigned
to a function call, that function call is createAdder();
JS looks for a function named createAdder in the local scope, which in
this instance is the global scope

Jump to createAdder(), no arguments are passed so we go right into the function
definition

line 3 has a function declaration addNumbers that takes two arguments
we assign the function definition from 4-6 to the variable addNumbers,
the function doesn't execute.

Line 7 has a return statement that returns a variable 'addNumbers'
since the function is not invoked, the function definition is returned,
the local execution context is destroyed

adder is now equal to the returned function 'addNumbers'

line 10 we see a let operator, we assign the identifier 'sum' to the 
result of calling the function 'adder' and passing it two arguments
one of those arguments is a variable named 'val', we look in the local
execution context of sum, which is the global execution context, and we 
find a variable named val, it has a value of 7

the function adder is called with the arguments 7, 8

jumping into the function adder, a new local execution context is created
two parameter variables are created in that local execution context 
a and b, a is set to 7, and b is set to 8

JS is now ready to begin executing inside the function body
a local variable ret is declared, its value is equal to the result of
adding the variables a and b together, JS looks for the variables in the local
execution context and finds them, 7, 8, so now ret is equal to 15
a variable 'ret' is returned, JS looks for it, finds its 15, returns 15
JS terminates the function, the local execution context is destroyed and popped
off the stack, sum is now set to 15

*/

// Hoisting notes

// function foo() {
//   function bar() {
//     return 3;
//   }
//   return bar();
//   function bar() {
//     return 8;
//   }
// }

// console.log(foo()); // logs 8
// // What's happening?
// // the above effectively ends up running like this
// function foo() {
//   function bar() {
//     return 3;
//   }

//   function bar() {
//     return 8;
//   }

//   return bar();
// }
// and the first function gets overwritten/redefined by the second bar function declaration
// NOTE: the second function declaration is still available after the return statement because the return
// is not executed until the execution phase, and during the creation phase, the functions are made
// available at the top of the foo() scope.


// for (var index = 0; index < 2; index += 1) {
//   console.log(foo);
//   if (index === 0) {
//     var foo = "Hello";
//   } else {
//     foo = "Bye";
//   }
// }

// console.log(foo);
// console.log(index);

// // because foo and index are not contained within a function, they have global scope

// // undefined (foo get hoisted as undefined)
// // foo = hello
// // index 1
// // Hello
// // foo = Bye
// // index = 2
// // for loop ends
// // Bye
// // 2

// // undefined, hello, bye, 2


// function Pet(name, image) {
//   this.name = name;
//   this.image =  image;
// }

// let Image;
// var catImage;
// var pudding;


// Pet.prototype.walk = function() {
//   console.log(`${this.name} is walking.`);
// };


// Image = class {
//   constructor(file) {
//     this.file = file;
//   }
// }

// catImage = new Image("cat.png");
// pudding = new Pet("Pudding", catImage);
// 'use strict'
// // let obj = {
// //   a: 5,
// //   go() {
// //     this.a = 42;
// //   },
// // };

// // let doIt = obj.go;

// // doIt();
// // console.log(obj.a); // 5
// // console.log(global.a)


// const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
// const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
//          "10", "Jack", "Queen", "King", "Ace"];

// function createDeck() {
//   let allCards = () => {
//     return SUITS.reduce((deck, suit) => {
//       RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
//       return deck;
//     }, []);
//   };

//   let deck = allCards();
//   shuffle(deck);

//   return deck;
// }

// function shuffle(deck) {
//   for (let counter = 0; counter < 256; counter += 1) {
//     let randomIndex1 = randomCardIndex();
//     let randomIndex2 = randomCardIndex();
//     let tempCard = deck[randomIndex1];
//     deck[randomIndex1] = deck[randomIndex2];
//     deck[randomIndex2] = tempCard;
//   }

//   function randomCardIndex() {
//     return Math.floor(Math.random() * deck.length);
//   }
// }

// console.log(createDeck());
// console.log(module)
// let sup = 'hi';
// module.exports = sup;

// console.log(module)
// console.log(__dirname);
// console.log(__filename);


// try {
//   console.log('1');

// } catch (error) {
//   if (error instanceof Error) {
//     console.log('2');
//   } else {
//     throw error;
//   }
// }

// throw new Error('test');
// "use strict"
// function test(){
//   console.log(this)
// }
// test()
// /*
// total 10
// result = 8, total is 8
// 8 + total is 13 = 21
// 21 + total is 16 = 37
// 37 + total is 12 = 49
// */

let arr = [ 1, 2]
let [ ...newArr ] = arr
console.log(newArr === arr)