const returnNumber = (number) => number;

const isMultipleOf = (number, multiple) => number % multiple == 0;

const whatIs = (number) => {
  const isMultipleOf3 = isMultipleOf(number, 3);
  const isMultipleOf5 = isMultipleOf(number, 5);

  if (isMultipleOf3 && isMultipleOf5) return "FizzBuzz";
  if (isMultipleOf3) return "Fizz";
  if (isMultipleOf5) return "Buzz";

  return number;
};

module.exports = { returnNumber, isMultipleOf, whatIs };