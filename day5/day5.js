const fs = require("fs");
const input = fs.readFileSync("./day5.txt").toString().split("\n");

const rules = input.splice(0, input.indexOf(""));
input.splice(0, 1);
const updates = input.map((u) => u.split(",").map(Number));

const sortFn = (a, b) => {
  const possibleRules = [`${a}|${b}`, `${b}|${a}`];

  if (rules.includes(possibleRules[0])) {
    return -1;
  } else if (rules.includes(possibleRules[1])) {
    return 1;
  }

  return 0;
};

let correctOrderSum = 0;
let incorrectOrderSum = 0;

updates.forEach((update) => {
  const sorted = update.toSorted(sortFn);
  const middleNumber = sorted[Math.floor(sorted.length / 2)];

  if (update.toString() === sorted.toString()) {
    correctOrderSum += middleNumber;
  } else {
    incorrectOrderSum += middleNumber;
  }
});

console.log({ correctOrderSum, incorrectOrderSum });
