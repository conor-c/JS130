// 1.
function foo(bar, qux, baz) {
  return {
    bar: bar,
    qux: qux,
    baz: baz,
  };
}

// 2.
function foo() {
  return {
    bar: function() {
      console.log("bar");
    },
    qux: function(arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz: function(arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  };
}

// 3.
function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let results = foo(1, 2, 3);
let baz = results.baz;
let qux = results.qux;
let bar = results.bar;

// 4.
function foo(arr) {
  return [
    arr[2],
    5,
    arr[0],
  ]
}

let array = [1, 2, 3];
let result = foo(array);
let bar = result[0];
let qux = result[1];
let baz = result[2];

// 5.
function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
let result = product(array[0], array[1], array[2]);

// 6.
function product() {
  return [].reduce.call(arguments, (total, number) => total * number);
}

let result = product(2, 3, 4, 5);

// 7.
function quz() {
  let animalType = 'cat';
  let age = 9;
  let colors = ['black', 'white'];
  return {
    type: animalType,
    age,
    colors,
  }
}

let { type, age, colors } = qux();