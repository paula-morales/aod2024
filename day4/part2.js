const fs = require("fs");
const grid = fs
  .readFileSync("./day4.txt")
  .toString()
  .split("\n")
  .map((row) => row.split(""));

const words = ["MAS", "SAM"];

let counter = 0;

const count = () => {
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 0; j < grid[0].length - 1; j++) {
      if (grid[i][j] !== "A") {
        continue;
      }

      const char1 = grid[i - 1][j - 1];
      const char2 = grid[i - 1][j + 1];
      const char3 = grid[i][j];
      const char4 = grid[i + 1][j - 1];
      const char5 = grid[i + 1][j + 1];

      const word1 = `${char1}${char3}${char5}`;
      const word2 = `${char2}${char3}${char4}`;

      if (words.includes(word1) && words.includes(word2)) {
        counter += 1;
      }
    }
  }
};

count();

console.log({ counter });
