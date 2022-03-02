const Car = require('../car.js');

describe("The car class", () => {
  test('car obj has four wheels', () => {
    let car = new Car();
    expect(car.wheels).toBe(4);
    expect({a: 1}).not.toBe({a: 1});
  });
})