const { generateText } = require("../util");

test("SHould output name and age", () => {
  const text = generateText("Max", 28);
  expect(text).toBe("Max (28 years old)");
});
