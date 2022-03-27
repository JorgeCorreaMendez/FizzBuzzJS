const returnNumber = (number) => number;

const isMultipleOf = (multiple, number) => {
  return number % multiple == 0;
};

module.exports = { returnNumber, isMultipleOf };
