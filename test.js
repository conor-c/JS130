let val = 7
function createAdder() {
  function addNumbers(a, b) {
    let ret = a + b
    return ret
  }
  return addNumbers
}
let adder = createAdder()
let sum = adder(val, 8)
console.log('example of function returning a function: ', sum)

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