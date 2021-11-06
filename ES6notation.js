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

