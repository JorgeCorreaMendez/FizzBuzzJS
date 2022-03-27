const fizzBuzz = require("./fizzBuzz")

for (let index = 1; index <= 100; index++) {
  const isMultipleOf3 = fizzBuzz.isMultipleOf(3, index)
  const isMultipleOf5 = fizzBuzz.isMultipleOf(5, index)

  if(isMultipleOf3 && isMultipleOf5) {
    console.log("FizzBuzz")
  } else if (isMultipleOf3) {
    console.log("Fizz")
  } else if (isMultipleOf5) {
    console.log("Buzz")
  } else {
    console.log(index)
  }
}