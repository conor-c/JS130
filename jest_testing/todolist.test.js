const { Todo, TodoList } = require("../todolist");

describe("TodoList", () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('toArray returns a copy of the todos list', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('.first() returns first todo', () => {
    expect(list.first()).toBe(todo1);
  });

  test('.last() returns the last todo', () => {
    expect(list.last()).toBe(todo3);
  });

  test(".shift() removes and returns the first item in the list", () => {
    expect(list.shift()).toBe(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test(".pop() removes and returns the last item in the list", () => {
    expect(list.pop()).toBe(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test(".isDone() returns true when all todos are done, false otherwise", () => {
    expect(list.isDone()).toBe(false);

    todo1.markDone();
    todo2.markDone();
    todo3.markDone();

    expect(list.isDone()).toBe(true);
  });

  test("TypeError when adding non Todo objects", () => {
    let fakeTodo = {};
    let newTodo = new TodoList('test');
    expect(() => list.add(fakeTodo)).toThrow(TypeError);
    expect(() => list.add(1)).toThrow(TypeError);
    expect(() => list.add('test')).toThrow(TypeError);
    expect(() => list.add(newTodo)).toThrow(TypeError);
  });

  test("itemAt() returns the item at specified index, throws error if index is wrong", () => {
    expect(list.itemAt(0)).toBe(todo1);
    expect(list.itemAt(2)).toBe(todo3);
    expect(() => list.itemAt(3)).toThrow(ReferenceError);
  });

  test("markDoneAt marks the correct todo as done, throws referenceError if index is undefined", () => {
    list.markDoneAt(1);
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(false);


    expect(() => list.markDoneAt(5)).toThrow(ReferenceError);
  });

  test("markUndoneAt unmarks the correct todo, throws refError if index is undefined", () => {
    expect(() => list.markUndoneAt(4)).toThrow(ReferenceError);

    list.markDoneAt(1);
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(false);

    list.markUndoneAt(1);
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(false);
    expect(todo3.isDone()).toBe(false);
  });

  test("markAllDone marks every todo on the list as done", () => {
    list.markAllDone();
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
    expect(list.isDone()).toBe(true);
  });

  test("removeAt removes a todo at specified index, throws ref if index isn't found", () => {
    expect(() => list.removeAt(6)).toThrow(ReferenceError);

    list.removeAt(1);
    expect(list.toArray()).toEqual([todo1, todo3]);
  });

  test("toString returns a string representation of the list", () => {
    let expectedString1 = `---- Today's Todos ----\n[ ] Buy milk\n[ ] Clean room\n[ ] Go to the gym`;
    expect(list.toString()).toBe(expectedString1);

    list.markDoneAt(1);
    let expectedString2 = `---- Today's Todos ----\n[ ] Buy milk\n[X] Clean room\n[ ] Go to the gym`;
    expect(list.toString()).toBe(expectedString2);

    let expectedString3 = `---- Today's Todos ----\n[X] Buy milk\n[X] Clean room\n[X] Go to the gym`;
    list.markAllDone();
    expect(list.toString()).toBe(expectedString3);
  });

  test("forEach iterated over all elements in the list", () => {
    let values = [];
    list.forEach(todo => values.push(todo));
    expect(values).toEqual([todo1, todo2, todo3]);
  });

  test("filter returns a new todoList of selected todos", () => {
    list.markDoneAt(1);
    let filteredTodo = list.filter(todo => todo.isDone());

    expect(filteredTodo).toBeInstanceOf(TodoList);
    expect(filteredTodo).not.toBe(list);
    expect(filteredTodo.toArray()).toEqual([todo2]);
  });
});

describe("Todo", () => {
  
});