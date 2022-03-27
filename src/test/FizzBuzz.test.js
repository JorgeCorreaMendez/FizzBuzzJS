const fizzBuzz = require("../fizzBuzz");

test("should same number", () => {
  const number = fizzBuzz.returnNumber(1);
  
  if (number != 1)
    throw new Error("return number should be 1 but got " + number);
});

test("should be multiple of 3", () => {
  if(!fizzBuzz.isMultipleOf(3, 9))
    throw new Error("fuction should be true but got false ")
})

test("should be multiple of 5", () => {
  if(!fizzBuzz.isMultipleOf(5, 10))
    throw new Error("fuction should be true but got false ")
})