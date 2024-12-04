const fs = require("fs");

const memory = fs.readFileSync("./day3.txt").toString();

const findAllMulOccurrences = (input) => {
  // Regex to detect mul(XXX,XXX)
  const regex = /mul\(\d{1,3},\d{1,3}\)/g;

  return input.match(regex);
};

const getResult = (mulString) => {
  // capture 2 numbers
  const regex = /^mul\((\d{1,3}),(\d{1,3})\)$/;
  const match = mulString.match(regex);

  // If there's a match, return the multiplication of both numbers
  if (match) {
    const num1 = parseInt(match[1], 10);
    const num2 = parseInt(match[2], 10);
    return num1 * num2;
  }

  return 0;
};

const mul = findAllMulOccurrences(memory);

const total = mul.reduce((sum, multiplication) => {
  return (sum += getResult(multiplication));
}, 0);

console.log({ total });
