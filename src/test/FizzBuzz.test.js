const returnNumber = require("../fizzBuzz");

test("should same number", () => {
  const number = returnNumber(1);
  
  if (number != 1)
    throw new Error("return number should be 1 but got " + number);
});
