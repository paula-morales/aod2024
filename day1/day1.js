const fs = require("fs");
const input = fs.readFileSync("./day1.txt").toString();

const array1 = [];
const array2 = [];

input.split(/\r?\n/).map((values) => {
  const [list1, list2] = values.split(/\s+/);
  array1.push(list1);
  array2.push(list2);
});

const sortingFn = (a, b) => a - b;

array1.sort(sortingFn);
array2.sort(sortingFn);

const distance = array1
  .map((num, index) => Math.abs(num - array2[index]))
  .reduce((sum, num) => sum + num, 0);

const similarityScore = array1.reduce((sum, num) => {
  const count = array2.filter((x) => x === num).length;
  return sum + num * count;
}, 0);

console.log({ distance, similarityScore });
