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
  })
});

describe("Todo", () => {

});