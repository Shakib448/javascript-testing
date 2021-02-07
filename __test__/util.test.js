const { generateText, checkAndGenerate } = require("../util");

test("SHould output name and age", () => {
  const text = generateText("Max", 28);
  expect(text).toBe("Max (28 years old)");
});

test("Should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  expect(text).toBe("Max (29 years old)");
});
