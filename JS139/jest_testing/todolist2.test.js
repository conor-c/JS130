const Todo = require('../todo2');
const TodoList = require('../todolist2');

describe('TodoList tests', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    // create fresh Todo's
    todo1 = new Todo("Buy milk");
    todo2 = new Todo("Clean room");
    todo3 = new Todo("Go to the Gym");

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('toArray should return a copy of the list', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('first should return todo1', () => {
    expect(list.first()).toBe(todo1);
  });

  test('last should return last todo in list', () => {
    expect(list.last()).toBe(todo3);
  });

  test('shift removes the first todo and returns it', () => {
    expect(list.shift()).toBe(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  })
})
