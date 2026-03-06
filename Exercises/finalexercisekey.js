/* =========================================================
   ANSWER KEY / SOLUTIONS (one possible set of solutions)
   NOTE: Students may have different correct implementations.
   ========================================================= */

// 1
let outside = "I am outside";
{
  let outside = "I am inside";
  console.log(outside);
}
console.log(outside);

// 2
// Step A (will throw if run):
// {
//   let secret = "shh";
// }
// console.log(secret);

// Step B (fixed):
let secret;
{
  secret = "shh";
}
console.log(secret);

// 3
const numbers = [1, 2, 3];
numbers.push(4);
// numbers = [9, 9, 9]; // ❌ TypeError: cannot reassign const reference

// 4
function gradeLetter(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}
console.log(gradeLetter(95));
console.log(gradeLetter(83));
console.log(gradeLetter(40));

// 5
function dayType(day) {
  switch (day) {
    case "Mon":
    case "Tue":
    case "Wed":
    case "Thu":
    case "Fri":
      return "weekday";
    case "Sat":
    case "Sun":
      return "weekend";
    default:
      return "invalid";
  }
}
console.log(dayType("Mon"));
console.log(dayType("Sun"));
console.log(dayType("???"));

// 6
for (let i = 1; i <= 10; i++) console.log(i);
for (let i = 10; i >= 1; i--) console.log(i);

// 7
let count = 0;
while (count < 3) {
  console.log("Loading...");
  count++;
}

// 8
let tries = 0;
do {
  tries++;
  console.log(`Try #${tries}`);
} while (tries < 3);

// 9
const nums9 = [1, 2, 3, 4, 5, 6];
for (let n of nums9) {
  if (n % 2 === 0) continue;
  console.log(n);
}

// 10
const names10 = ["Ana", "Felix", "Mia", "Omar"];
for (let name of names10) {
  if (name === "Felix") {
    console.log("Found Felix!");
    break;
  }
}

// 11
const arr11 = ["a", "b", "c", "d"];
for (let i = arr11.length - 1; i >= 0; i--) console.log(arr11[i]);

// 12
const evens12 = [];
for (let i = 2; i <= 20; i += 2) evens12.push(i);
console.log(evens12);

// 13
const prices13 = [5, 10, 3, 12];
let total13 = 0;
for (let p of prices13) total13 += p;
console.log(total13);

// 14
const scores14 = [88, 91, 72, 99, 85];
let maxScore = scores14[0];
for (let s of scores14) {
  if (s > maxScore) maxScore = s;
}
console.log(maxScore);

// 15
function containsValue(arr, value) {
  return arr.indexOf(value) !== -1;
}
console.log(containsValue([1, 2, 3], 2));
console.log(containsValue([1, 2, 3], 9));

// 16
function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let ch of str.toLowerCase()) {
    if (vowels.indexOf(ch) !== -1) count++;
  }
  return count;
}
console.log(countVowels("Hello World"));

// 17
const firstName = "Ana";
const points = 12;
console.log(`Player ${firstName} has ${points} points!`);

// 18
function isTruthy(value) {
  return Boolean(value);
}
console.log(isTruthy(0));
console.log(isTruthy("0"));
console.log(isTruthy(""));
console.log(isTruthy([]));
console.log(isTruthy(null));

// 19
function displayName(inputName) {
  return inputName || "Guest";
}
console.log(displayName(""));
console.log(displayName("Martin"));

// 20
function displayNameNullish(inputName) {
  return inputName ?? "Guest";
}
console.log(displayNameNullish(""));
console.log(displayNameNullish(null));

// 21
const car = { make: "Toyota", model: "Camry", year: 2020 };
console.log(car.model);

// 22
const user22 = { "age-2025": 36 };
console.log(user22["age-2025"]);

// 23
const profile = { name: "Ana" };
profile.age = 30;
console.log(profile);
profile.name = "Ana Maria";
console.log(profile);
delete profile.age;
console.log(profile);

// 24
const settings24 = { theme: "dark", volume: 8, tips: true };
for (let k of Object.keys(settings24)) {
  console.log(`key: ${k} -> value: ${settings24[k]}`);
}

// 25
const cart25 = { apples: 3, bananas: 2, oranges: 4 };
let count25 = 0;
for (let v of Object.values(cart25)) count25 += v;
console.log(count25);

// 26
const grades26 = { Ana: 90, Felix: 82, Mia: 95 };
for (let [name, grade] of Object.entries(grades26)) {
  console.log(`${name} scored ${grade}`);
}

// 27
const a27 = { nested: { n: 1 } };
const copy27 = Object.assign({}, a27);
copy27.nested.n = 999;
console.log(a27.nested.n, copy27.nested.n); // both 999 (shallow copy)

// 28
const a28 = [1, 2, 3];
const b28 = [...a28];
b28.push(4);
console.log(a28, b28);

// 29
console.log(typeof "hi");  // string
console.log(typeof 10);    // number
console.log(typeof NaN);   // number
console.log(typeof null);  // object (JS quirk)
console.log(typeof []);    // object

// 30
function safeDivide(a, b) {
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) return null;
  if (b === 0) return null;
  return a / b;
}
console.log(safeDivide(10, 2));
console.log(safeDivide(10, 0));
console.log(safeDivide(10, "x"));

// 31
console.log("11 - \"2\" =", 11 - "2");
console.log("\"1\" + 2 =", "1" + 2);

// 32
console.log("5" == 5);
console.log("5" === 5);
console.log(null == undefined);
console.log(null === undefined);

// 33
console.log("b" > "a");
console.log("A" > "a"); // false because uppercase letters sort before lowercase in Unicode

// 34
const arr34 = ["x", "y", "z"];
for (let v of arr34) console.log("value:", v);
for (let i in arr34) console.log("index:", i);

// 35
const items35 = ["pen", "pen", "book", "pen", "book"];
const counts35 = {};
for (let item of items35) {
  if (!counts35[item]) counts35[item] = 0;
  counts35[item]++;
}
console.log(counts35);

// 36
const students36 = [
  { name: "Ana", grades: [90, 80] },
  { name: "Mia", grades: [100, 95] }
];
for (let student of students36) {
  for (let g of student.grades) {
    console.log(`${student.name} -> ${g}`);
  }
}

// 37
for (let student of students36) {
  let sum = 0;
  for (let g of student.grades) sum += g;
  let avg = sum / student.grades.length;
  console.log(`${student.name} average: ${avg}`);
}

// 38
const nums38 = [10, 20, 55, 40, 60];
let firstOver50 = null;
for (let n of nums38) {
  if (n > 50) {
    firstOver50 = n;
    break;
  }
}
console.log(firstOver50);

// 39
let countOver50 = 0;
for (let n of nums38) {
  if (n > 50) countOver50++;
}
console.log(countOver50);

// 40
const nums40 = [1, 2, 3, 4, 5, 6];
const evens40 = [];
for (let n of nums40) {
  if (n % 2 === 0) evens40.push(n);
}
console.log(evens40);

// 41
function double(n) {
  return n * 2;
}
console.log(double(5));

// 42
function printPositive(n) {
  if (n <= 0) return;
  console.log("Positive!");
}
printPositive(-1);
printPositive(5);

// 43
function isValidPassword(pw) {
  if (pw.length < 8) return false;
  for (let ch of pw) {
    if (ch >= "0" && ch <= "9") return true;
  }
  return false;
}
console.log(isValidPassword("abc"));
console.log(isValidPassword("abc12345"));

// 44
function cleanUsername(name) {
  return name.trim().toLowerCase();
}
console.log(cleanUsername("  Martin  "));

// 45
const user45 = { name: "Ana" };
if (user45.age === undefined) user45.age = 0;
console.log(user45);

// 46
const user46 = { name: "Ana", points: 12 };
console.log(`${user46.name} has ${user46.points} points.`);

// 47
for (let ch of "code") console.log(ch);

// 48
const arr48 = [1, 2, 3, 4, 5];
const first = arr48.shift();
const last = arr48.pop();
console.log(first, last);
console.log(arr48);

// 49
function range(start, end) {
  const out = [];
  for (let i = start; i <= end; i++) out.push(i);
  return out;
}
console.log(range(3, 7));

// 50
const scores50 = {};
function addScore(name, points) {
  if (scores50[name] === undefined) scores50[name] = 0;
  scores50[name] += points;
}
function printScores() {
  for (let [name, score] of Object.entries(scores50)) {
    console.log(`${name}: ${score}`);
  }
}
addScore("Ana", 5);
addScore("Ana", 2);
addScore("Mia", 10);
printScores();
