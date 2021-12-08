const Car = require("./car");

describe("The Car class", () => {
  let car = new Car();
  beforeEach(() => {
    car = new Car();
  });

  test("has four wheels", () => {
    expect(car.wheels).toBe(4);
  });

  test("bad wheels", () => {
    expect(car.wheels).not.toBe(3);
  });

  test("two cars are equal objects", () => {
    let car1 = new Car();
    let car2 = new Car();

    expect(car1).toEqual(car2);
  });

  test("does not have doors", () => {
    expect(car.doors).toBeUndefined();
  });

  test("raise an error when calling drive", () => {
    expect(() => car.drive()).toThrow(TypeError);
  });

  test("a new car has no mileage", () => {
    expect(car.mileageInfo).toBeNull();
  });

  test("wheels are truthy", () => {
    expect(car.wheels).toBeTruthy();
  });

  test("contains car", () => {
    let arr = [];
    arr.push(car);
    expect(arr).toContain(car);
  });

  test("string contains 'ring'", () => {
    let string = 'string contains';
    expect(string).toContain('ring');
  });
});