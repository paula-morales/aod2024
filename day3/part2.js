const fs = require("fs");

const memory = fs.readFileSync("./day3.txt").toString();

const findAllOccurrences = (input) => {
  // Regex to detect mul(ddd,ddd), do() and don't()
  const regex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;

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

const mul = findAllOccurrences(memory);

let total = 0;
let isEnabled = true;

for (let index = 0; index < mul.length; index++) {
  const multiplication = mul[index];

  switch (multiplication) {
    case "do()":
      isEnabled = true;
      break;
    case "don't()":
      isEnabled = false;
      break;
    default:
      if (isEnabled) total += getResult(multiplication);
      break;
  }
}

console.log({ total });
