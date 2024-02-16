import { readFile } from "node:fs/promises";
import path from "node:path";
import { getMedian, getArithmeticMean } from "./libs/helpers/helpers.js";

console.time();
const stringList = await readFile(path.join("db", "10m.txt"), "utf8");
const strings = stringList.split(/\r\n|\n/);
const numbers = strings.map(string => Number(string));
numbers.pop();
const sortedNumbers = numbers.toSorted((first, second) => first - second);

const minNumber = sortedNumbers[0];
const maxNumber = sortedNumbers[sortedNumbers.length - 1];
const median = getMedian(sortedNumbers);
const arithmeticMean = getArithmeticMean(sortedNumbers);

let longestIncreasingSequence = [];
let currentIncreasingSequence = [];
let longestDecreasingSequence = [];
let currentDecreasingSequence = [];

for (let index = 0; index < numbers.length; index++) {
  const nextIndex = index + 1;
  const currentNumber = numbers[index];
  const nextNumber = numbers[nextIndex];

  if (index === 0) {
    currentIncreasingSequence.push(currentNumber);
  }

  const isNextNumberGreater = nextNumber > currentNumber;

  if (isNextNumberGreater) {
    currentIncreasingSequence.push(nextNumber);
  } else {
    const isLongestSequence =
      currentIncreasingSequence.length > longestIncreasingSequence.length;

    if (isLongestSequence) {
      longestIncreasingSequence = [...currentIncreasingSequence];
      currentIncreasingSequence = [nextNumber];
    } else {
      currentIncreasingSequence = [nextNumber];
    }
  }

  const isNextNumberLess = nextNumber < currentNumber;

  if (isNextNumberLess) {
    currentDecreasingSequence.push(nextNumber);
  } else {
    const isLongestSequence =
      currentDecreasingSequence.length > longestDecreasingSequence.length;

    if (isLongestSequence) {
      longestDecreasingSequence = [...currentDecreasingSequence];
      currentDecreasingSequence = [nextNumber];
    } else {
      currentDecreasingSequence = [nextNumber];
    }
  }
}

console.log(
  "The longest decreasing sequence of numbers",
  longestDecreasingSequence
);
console.log(
  "The longest increasing sequence of numbers",
  longestIncreasingSequence
);
console.log("Arithmetic mean", arithmeticMean);
console.log("Median", median);
console.log("Max number", maxNumber);
console.log("Min number", minNumber);
console.timeEnd();
