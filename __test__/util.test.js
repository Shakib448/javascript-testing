const { generateText } = require("../util");

test("SHould output name and age", () => {
  const text = generateText("Max", 28);
  expect(generateText("shakib", 23)).toBe(text);
});
