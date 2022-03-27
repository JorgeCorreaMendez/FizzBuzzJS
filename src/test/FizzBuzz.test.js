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

test("should be fizz", () => {
  const number = fizzBuzz.whatIs(3) 
  if(number != "Fizz")
    throw new Error("fuction should be Fizz but got " + number)
})

test("should be buzz", () => {
  const number = fizzBuzz.whatIs(5) 
  if(number != "Buzz")
    throw new Error("fuction should be Buzz but got " + number)
})

test("should be fizzbuzz", () => {
  const number = fizzBuzz.whatIs(15) 
  if(number != "FizzBuzz")
    throw new Error("fuction should be Buzz but got " + number)
})


