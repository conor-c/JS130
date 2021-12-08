function delegate(obj, objMethod, ...passedArgs) {
  return function() {
    return obj[objMethod].apply(obj, passedArgs);
  };
} // probably best to use an arrow function if deciding to use the rest operator

let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };

baz.qux();  // logs 'changed'