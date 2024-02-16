import { readFile } from "node:fs/promises";
import path from "node:path";
import { getMedian } from "./libs/helpers/helpers.js";

console.time();
const stringList = await readFile(path.join("db", "10m.txt"), "utf8");
const strings = stringList.split(/\r\n|\n/);
const numbers = strings.map(string => Number(string));
numbers.pop();
const sortedNumbers = numbers.toSorted((first, second) => first - second);

const minNumber = sortedNumbers[0];
const maxNumber = sortedNumbers[sortedNumbers.length - 1];
const median = getMedian(sortedNumbers);

console.log("Median", median);
console.log("Max number", maxNumber);
console.log("Min number", minNumber);
console.timeEnd();
