import { readFile } from "node:fs/promises";
import path from "node:path";

console.time();
const stringList = await readFile(path.join("db", "10m.txt"), "utf8");
const strings = stringList.split(/\r\n|\n/);
const numbers = strings.map(string => Number(string));
numbers.pop();
const sortedNumbers = numbers.toSorted((first, second) => first - second);

const minNumber = sortedNumbers[0];
console.log("Min number", minNumber);
console.timeEnd();
