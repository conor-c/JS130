class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() { //overrides default .toString method
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.getTitle()}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  toString() {
    let title = `---- ${this.title} ----\n`;
    let todosList = this.todos.map(todo => {
      return todo.toString();
    }).join('\n');

    return `${title}${todosList}`
  }

  add(todoObj) {
    if (!(todoObj instanceof Todo)) {
      throw new TypeError("can only add Todo objects");
    }

    this.todos.push(todoObj);
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size() - 1];
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }

  isDone() {
    return this.todos.every(todo => todo.isDone());
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1)[0];
  }

  forEach(callback, thisArg) {
    // for (let index = 0; index < this.size(); index += 1) {
    //   callback.call(thisArg, this.todos[index], index, this.todos);
    // }
    this.todos.forEach(callback);
  }

  filter(callback) {
    let selectedTodos = new TodoList(this.title);

    this.forEach(todo => {
      if (callback(todo)) {
        selectedTodos.add(todo);
      }
    });

    return selectedTodos;
  }

  findByTitle(title) {
    return this.filter(todo => todo.getTitle() === title).first();
  }

  allDone() {
    return this.filter(todo => todo.isDone())
  }

  allNotDone() {
    return this.filter(todo => !todo.isDone())
  }

  markDone(title) {
    let todo = this.findByTitle(title);
    if (todo) {
      todo.markDone();
    }
  }

  markAllDone() {
    this.allNotDone().forEach(todo => todo.markDone());
  }

  markAllUndone() {
    this.allDone().forEach(todo => todo.markUndone());
  }

  toArray() {
    return this.todos.slice();
  }
  
  _validateIndex(index) {
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

}

module.exports = { Todo, TodoList };

// let todo1 = new Todo("Buy milk");
// let todo2 = new Todo("Clean room");
// let todo3 = new Todo("Go to the gym");
// let todo4 = new Todo("Go shopping");
// let todo5 = new Todo("Feed the cats");
// let todo6 = new Todo("Study for Launch School");
// let list = new TodoList("Today's Todos");

// list.add(todo1);
// list.add(todo2);
// list.add(todo3);
// list.add(todo4);
// list.add(todo5);
// list.add(todo6);
// todo1.markDone();
// todo5.markDone();

// console.log(list);

// let copy = list.toArray();
// console.log(copy)
// console.log(copy === list.todos)



