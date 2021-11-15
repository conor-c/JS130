function newStack() {
  let stack = [];

  return {
    push(arg) {
      stack.push(arg);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach(arg => {
        console.log(arg);
      })
    },
  }
}

let testStack = newStack();
testStack.push(1);
testStack.printStack();
let last = testStack.pop();
testStack.printStack();
