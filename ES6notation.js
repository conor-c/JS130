// concise property initializers

// Ways to initialize properties
// object literal (verbose)

// let obj = {
//   foo: 'foo',
//   bar: 'bar',
//   buz: 'buz',
// }

// verbose way to initialize an object using variables as properties

// function test(foo, bar, buz) {
//   return {
//     foo: foo,
//     bar: bar,
//     buz: buz, 
//   };
// }

// finally, using concise syntax
// let baz = 'baz';
// function test(foo, bar, buz) {
//   // let baz = 'baz';
//   return {
//     foo,
//     bar,
//     baz,
//   };
// } // creates the name of the property, and looks for a variable with that same name to use as the initial value.
// // Note: if you try and use concise syntax on a variable that isn't defined, you will get a ReferenceError
// // JS will look in the local scope and then in the outer scope until it reaches the global scope
// // if it still can't find the variable, thats when a referenceError will be thrown

// // also concise syntax can be mixed and matched with verbose syntax

// let testResult = test('foo', 'bar', 'buz');
// console.log(testResult);

// There isn't just concise property initializers
// Concise Method shorthand:

// Here is verbose:
// let obj = {
//   sayName: function(name) {
//     console.log(name);
//   },

//   yellName: function(name) {
//     console.log(name.toUpperCase());
//   },
// }

// obj.sayName('Conor');
// obj.yellName('Conor');

// // Here is the same object but with concise method syntax

// let obj2 = {
//   sayName(name) {
//     console.log(name);
//   },

//   yellName(name) {
//     console.log(name.toUpperCase());
//   },
// }

// obj2.sayName('Conor');
// obj2.yellName('Conor');

// // you can also mix and match verbose method syntax with concise method syntax...but don't.

// let obj3 = {
//   sayName: function(name) {
//     console.log(name);
//   },

//   yellName(name) {
//     console.log(name.toUpperCase());
//   },
// }

// obj3.sayName('Conor');
// obj3.yellName('Conor');

// Now getting into downright more useful ES6 shorthand is the Object Destructuring Shorthand

// verbose Object Destructuring
// let obj = {
//   foo: 'foo',
//   bar: 'bar',
// }

// let foo = obj.foo;
// let bar = obj.bar;

// console.log(foo, bar)

// can get pretty tedious destructuring and object with a bunch of properties
// the above can be written with a shorthand

// let { foo, bar } = obj;
// console.log(foo, bar)

// note that the order doesn't even matter, what we care about is that the variable names and the property names match

// let { bar, foo } = obj;
// console.log(foo, bar);

// foo is assigned to obj.foo still, bar is assigned the value of obj.bar still

// but what if you want to create a variable name that doesn't share the same property name as the objects property?
// no problem

// let { foo: differentFooName, bar } = obj;
// console.log(differentFooName, bar);

// note that if you use a property name that doesn't exist on the object, an error won't be thrown
// but the new variable name will be set to undefined as an initial value

// let { fakeFoo, bar} = obj;
// console.log(fakeFoo, bar); // undefined bar

// but WAIT theres MORE

// lets use destructuring with function PARAMETERS

// function test({ foo, bar }) {
//   console.log(foo);
//   console.log(bar);

// }


// let obj = {
//   foo: 'this is the foo property of obj',
//   bar: 'this is the bar property of obj',
// }

// test(obj);

// // pretty useful, but it's important to note that the destructuring property names must be the same as the passed in obj

// let obj2 = {
//   baz: 'baz',
//   foo: 'zap',
// }

// test(obj2)


// Watch out for using destructuring outside of a block or without assignment operators like let,var,const
// let obj = {
//   foo: 'foo',
//   bar: 'bar',
// }

// // { foo, bar } = obj; // this line will give us an error because JS treats the open bracket as the start of a block
// // instead you can nest it in parentheses
// // (This allows you to not have to combine variable declaration with variable assignment on the same line)
// let foo, bar;
// ({ foo, bar } = obj);


// Objects aren't the only thing destructuring is useful for
// Arrays can be destructured as well, but in the instance of arrays, order IS important

// let exampleArray = [1, 2, 3];
// let [one, two, three] = exampleArray;
// console.log(one, two, three); // 1 2 3

// if we only wanted a few, we can't just pick them with a property name like an object
// let exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let [ one, three ] = exampleArray;
// console.log(one, three);
// three will be assigned the value of 2, because it always will destructure in order

// instead commas must be used to -skip- past any unwanted elements
// let exampleArray = [1, 2, 3];
// let [ one, , three ] = exampleArray;
// console.log(one, three); // 1 3

// unlike object destructuring, if you separate declaration from assignment, you don't need to enclose the expression in parentheses 
// because [] won't start a new block

// let exampleArray = [1, 2];
// let one, two;
// [ one, two ] = exampleArray;
// console.log(one, two); // 1, 2

// What happens when you try and destructure with too many variables?

// let exampleArray = [1];
// let [ one, two ] = exampleArray;
// console.log(one, two); // 1 undefined

// the array doesn't have to be previously initialized either
// let [ one, two ] = [ 1, 2]; // the left side of the equals sign is the array destructuring, the right side is simply an array literal
// console.log(one, two);

// This is very hand when you need to swap the values of two (or more) variables without creating intermediary variables
// let one = 1;
// let two = 2;
// [ one, two ] = [two, one];
// console.log(one, two); // 2, 1

// Spread Syntax & Rest Syntax
// they both use the operator `...`

// using rest syntax in array destructuring let us assign any
// remaining variables to a (real) array

// let foo = [1, 2, 3, 4, 5];
// let [ fooOne, , fooThree, ...fooRest ] = foo;
// console.log(fooOne); // 1
// console.log(fooThree); // 3
// console.log(fooRest); // [4, 5]

// // notice that we used the ... operator in a context that means it is the rest syntax
// // we can use that same operator to demonstrate spread syntax: 
// console.log(...fooRest); // 4 5

// just to clarify, the spread syntax transforms an array of elements into their individual elements
// this is a massive time saver, and reduces possibilities of typos

// without the spread operator/ or the apply method, we have to manually enter an array by selecting their indices 
// function test(element1, element2, element3) {
//   // console.log(element1, element2, element3);
//   return element1 + element2 + element3;
// }

// let testData = [1, 2, 3];
// // console.log(test(testData)); //NaN, the array gets passed into the function as the first argument, and then element2, element3 are resolved to undefined
// // obviously an array + undefined + undefined is NaN.
// // so we have to select the array elements we want specifically
// // console.log(test(testData[0], testData[1], testData[2]))

// // thats why the spread operator is useful
// let sum = test(...testData); 
// console.log(sum); // 6

// // there is one other built in method that can do what we need, and thats the apply method (that can be found on any objects inheriting from function object)
// console.log(test.apply(null, testData)); //6
// we could use .call and pass in testData using the spread operator as well


// if given the choice, spread operator is more straightforward and easier to use

// ways to utilize spread operator
// clone an array
// let array = [1, 2, 3];
// let clonedArray = [...array];
// console.log(clonedArray); // [1, 2, 3]
// console.log(array === clonedArray); // false

// concatenate arrays together
// let firstPart = [1, 2, 3];
// let secondPart = [4, 5, 6];
// let whole = [...firstPart, ...secondPart];
// let reverseWhole = [...secondPart, ...firstPart];
// console.log(whole); // [1, 2, 3, 4, 5, 6]
// console.log(reverseWhole); // [4, 5, 6, 1, 2, 3]

// insert an array into another array
// let missingWords = ['name', 'is'];
// let unfinishedSentence = ['My', ...missingWords, 'Conor'];
// console.log(unfinishedSentence.join(' '));


// spread Syntax with objects
// works the same as with arrays, note that it will only enumerate over enumerable properties (duh)
// Only returns enumerable "own" properties. It loses the objects prototype upon copy
// clone an object
// let foo = { bing: 1, bang: 2 };
// let bar = { ...foo, bizz: 3 };
// console.log(bar);
// // bar !== foo

// Spread syntax use to merge objects
// let objPartOne = { qux: 1, baz: 2 };
// let objPartTwo = { foo: 3, bar: 4 };
// let wholeObject = { ...objPartOne, ...objPartTwo };
// console.log(wholeObject);

// Rest Syntax (...)
// Kind of like the opposite of the spread syntax, instead of expanding an array into individual
// items, it takes multiple items and puts it into an array or object

// The rest syntax can be used in all sorts of ways
// can be combined with an array destructure 
// let foo = [1, 2, 3];
// let [ bar, ...twoAndThree] = foo;
// console.log(bar); // 1
// console.log(twoAndThree); // [2, 3]
// twoAndThree used the rest syntax to collect the rest of the elements in foo

// the rest syntax must be the last element in a destructure or in the parameters

// rest syntax can be used with objects as well

// let foo = {bar: 1, qux: 2, baz: 3, xyz: 4};
// let { bar, baz, ...restOfProperties } = foo;
// console.log(bar); // 1
// console.log(baz); // 3
// console.log(restOfProperties); // { qux: 2, xyz: 4 }
// // again, take note that object destructuring does not care about property order like arrays
// it looks up based on property name

// rest syntax is most commonly used when working with functions that don't have a set amount of arguments
// without rest syntax, we'd have to rely on an array method .call whenever we wanted to use any built in 
// array features because the arguments object is an array-like object
// combine that with the aspect of not having parameter names on functions that rely on arbitrary parameter
// counts, the rest syntax ends up providing significant readability gains

// without rest syntax

// function findLargestNumber() {
//   let largestNumber = arguments[0];
//   Array.prototype.forEach.call(arguments, number => {
//     if (number > largestNumber) {
//       largestNumber = number;
//     }
//   });

//   return largestNumber;
// }

// with rest Syntax

function findLargestNumber(...numbers) {
  let largestNumber = numbers[0];
  numbers.forEach(number => {
    if (number > largestNumber) {
      largestNumber = number;
    }
  });

  return largestNumber;
}
// console.log(findLargestNumber(1, 2, 3, 4, 2)); // 4