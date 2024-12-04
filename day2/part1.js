const fs = require("fs");

const reports = fs
  .readFileSync("./day2.txt")
  .toString()
  .split("\n")
  .map((line) => line.split(/\s+/));

const isSafe = (report) => {
  const direction = Math.sign(report[1] - report[0]);

  for (let i = 1; i < report.length; i++) {
    const delta = report[i] - report[i - 1];
    const absDelta = Math.abs(delta);

    // Unsafe if is not decreasing or increasing
    // Unsafe if difference is not between 1 and 3
    if (absDelta < 1 || absDelta > 3 || direction * delta < 0) {
      return false;
    }
  }

  return true;
};

const safeReports = reports.reduce((sum, report) => {
  if (isSafe(report)) return (sum += 1);
  return sum;
}, 0);

console.log({ safeReports });
