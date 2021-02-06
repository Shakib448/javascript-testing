const cloneArray = require("../cloneArray");

test("Successful clone array is working", () => {
  const array = [1, 2, 3, 4, 4];
  expect(cloneArray(array)).toEqual(array);
});
