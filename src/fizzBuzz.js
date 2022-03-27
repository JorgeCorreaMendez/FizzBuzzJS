const returnNumber = (number) => number;

const isMultipleOf = (multiple, number) => number % multiple == 0;

const whatIs = (number) => {
  const isMultipleOf3 = isMultipleOf(3, number);
  const isMultipleOf5 = isMultipleOf(5, number);

  if (isMultipleOf3 && isMultipleOf5) return "FizzBuzz";
  if (isMultipleOf3) return "Fizz";
  if (isMultipleOf5) return "Buzz";

  return number;
};

module.exports = { returnNumber, isMultipleOf, whatIs };
