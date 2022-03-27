const returnNumber = (number) => number;

const isMultipleOf3 = (number) => {
  return number % 3 == 0;
};

const isMultipleOf5 = (number) => {
  return number % 5 == 0;
};

module.exports = { returnNumber, isMultipleOf3, isMultipleOf5 };
