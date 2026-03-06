/* =========================================================
   JAVASCRIPT CODING PRACTICE (WRITE CODE)
   Theme: scope, conditionals, loops, arrays, objects, truthy/falsy
   RULE: Students must WRITE the code (no multiple choice).
   ========================================================= */

/* ---------------------------
   1) SCOPE: block vs function
   ---------------------------
   Create a variable `outside` with value "I am outside".
   Inside a block {}, create a NEW variable with the SAME name using `let`
   with value "I am inside".
   Console.log BOTH values (inside then outside) WITHOUT getting an error.
*/
let outside = "I am outside";
{
   let outside = "I am inside"
   console.log(outside);
};
console.log(outside);

/* -----------------------------------------
   2) SCOPE ERROR (on purpose, then fix it)
   -----------------------------------------
   Step A: Write code that creates a block-scoped variable `secret` inside {}
   and then tries to log it outside the block (this should throw ReferenceError).
   Step B: Fix it so it logs safely (without removing the block).
*/


/* -------------------------
   3) CONST reference rules
   -------------------------
   Create a const array `numbers = [1,2,3]`.
   Add 4 to the array (this is allowed).
   Then TRY to reassign numbers to a new array (this should cause an error).
   Comment the line that throws and explain why in a comment.
*/

/* ---------------------------
   4) IF / ELSE-IF / ELSE
   ---------------------------
   Write a function `gradeLetter(score)`:
   - 90+ => "A"
   - 80-89 => "B"
   - 70-79 => "C"
   - 60-69 => "D"
   - else => "F"
   Return the letter (don’t console.log inside).
   Test it with 3 different scores.
*/

/* ---------------------------
   5) SWITCH practice
   ---------------------------
   Write a function `dayType(day)` that returns:
   - "weekday" for "Mon", "Tue", "Wed", "Thu", "Fri"
   - "weekend" for "Sat", "Sun"
   - "invalid" for anything else
   Use a switch statement.
*/

/* ---------------------------
   6) FOR loop counting
   ---------------------------
   Write a for loop that prints the numbers 1 to 10.
   Then write another for loop that prints 10 down to 1.
*/

/* ---------------------------
   7) WHILE loop + counter
   ---------------------------
   Using a while loop, log "Loading..." exactly 3 times.
*/

/* ---------------------------------
   8) DO...WHILE always runs once
   ---------------------------------
   Create a variable `tries = 0`.
   Use do...while to log "Try #X" starting at 1
   and stop after 3 tries.
*/

/* ---------------------------------------
   9) BREAK vs CONTINUE (skip evens)
   ---------------------------------------
   Given: const nums = [1,2,3,4,5,6]
   Write a loop that prints ONLY the odd numbers using `continue`.
*/

/* ---------------------------------------
   10) BREAK when found
   ---------------------------------------
   Given: const names = ["Ana","Felix","Mia","Omar"]
   Loop through names and stop the loop as soon as you find "Felix".
   Print "Found Felix!" when you find it.
*/

/* ---------------------------
   11) Reverse loop over array
   ---------------------------
   Given: const arr = ["a","b","c","d"]
   Write a for loop that logs: d c b a
*/

/* ---------------------------
   12) Build an array with push
   ---------------------------
   Start with an empty array `evens = []`.
   Use a loop to push the even numbers from 2 to 20 into it.
   Log the final array.
*/

/* ---------------------------
   13) Sum an array (no reduce)
   ---------------------------
   Given: const prices = [5, 10, 3, 12]
   Use a loop to calculate the total.
   Store it in `total` and log it.
*/

/* --------------------------------------
   14) Find max value (no Math.max spread)
   --------------------------------------
   Given: const scores = [88, 91, 72, 99, 85]
   Find the maximum score using a loop.
   Store it in `maxScore`.
*/

/* ---------------------------
   15) indexOf practice
   ---------------------------
   Write a function `containsValue(arr, value)` that:
   - returns true if value exists in arr
   - returns false otherwise
   Use indexOf (not includes).
   Test with at least 2 calls.
*/

/* ---------------------------
   16) String loop + count vowels
   ---------------------------
   Write a function `countVowels(str)` that returns how many vowels
   (a,e,i,o,u) appear in the string.
   Make it case-insensitive.
   Test it with "Hello World".
*/

/* ---------------------------
   17) Template literals
   ---------------------------
   Create variables `firstName` and `points`.
   Use a template literal to log:
   "Player <name> has <points> points!"
*/

/* ---------------------------
   18) Truthy/Falsy check
   ---------------------------
   Write a function `isTruthy(value)` that returns true/false based on
   JavaScript truthiness (use Boolean()).
   Test with: 0, "0", "", [], null
*/

/* -----------------------------------
   19) Default value with ||
   -----------------------------------
   Write a function `displayName(inputName)` that returns inputName
   if it’s truthy; otherwise returns "Guest".
   Use ||.
   Test with "" and "Martin".
*/

/* -----------------------------------
   20) Default value with ??
   -----------------------------------
   Write a function `displayNameNullish(inputName)` that returns inputName
   unless it is null or undefined, in which case return "Guest".
   Use ??.
   Test with: "" (should keep ""), null (should become "Guest").
*/

/* ---------------------------
   21) Object creation
   ---------------------------
   Create an object `car` with keys:
   - make
   - model
   - year
   Then log the model using dot notation.
*/

/* -----------------------------------------
   22) Bracket notation for weird key
   -----------------------------------------
   Create an object `user` with a key "age-2025" set to 36.
   Log it correctly using bracket notation.
*/

/* ---------------------------
   23) Add / update / delete
   ---------------------------
   Start with: const profile = { name: "Ana" }
   - Add age = 30
   - Update name to "Ana Maria"
   - Delete age
   Log profile after each step.
*/

/* ---------------------------
   24) Loop over object keys
   ---------------------------
   Given:
   const settings = { theme: "dark", volume: 8, tips: true }
   Use Object.keys to loop and log:
   "key: <key> -> value: <value>"
*/

/* ---------------------------
   25) Object.values total
   ---------------------------
   Given:
   const cart = { apples: 3, bananas: 2, oranges: 4 }
   Sum the values (total items) using Object.values + a loop.
   Store in `count`.
*/

/* ---------------------------
   26) Object.entries formatting
   ---------------------------
   Given:
   const grades = { Ana: 90, Felix: 82, Mia: 95 }
   Use Object.entries to log:
   "Ana scored 90"
   etc.
*/

/* ---------------------------
   27) Shallow copy with assign
   ---------------------------
   Create:
   const a = { nested: { n: 1 } }
   Make a copy using Object.assign({}, a).
   Change copy.nested.n to 999.
   Log BOTH a.nested.n and copy.nested.n.
   Explain what happened in a comment.
*/

/* ---------------------------
   28) Spread copy for arrays
   ---------------------------
   Create:
   const a = [1,2,3]
   const b = [...a]
   Push 4 into b.
   Log a and b to show they differ.
*/

/* ---------------------------
   29) typeof practice
   ---------------------------
   Write code that logs typeof for:
   - "hi"
   - 10
   - NaN
   - null
   - []
   Add comments with what you EXPECT each to be.
*/

/* -----------------------------------------
   30) Fix NaN input in a divide function
   -----------------------------------------
   Write a function `safeDivide(a, b)`:
   - If a or b is not a valid number (NaN), return null
   - If b is 0, return null
   - Otherwise return a / b
   Test:
   safeDivide(10,2)
   safeDivide(10,0)
   safeDivide(10,"x")
*/

/* ---------------------------
   31) Coercion demonstration
   ---------------------------
   Write code that shows:
   - 11 - "2" results in a number
   - "1" + 2 results in a string
   Log both results with labels.
*/

/* ---------------------------
   32) Strict equality checks
   ---------------------------
   Write 4 console.logs to demonstrate:
   - "5" == 5 (true)
   - "5" === 5 (false)
   - null == undefined (true)
   - null === undefined (false)
*/

/* ---------------------------
   33) Lexicographic comparisons
   ---------------------------
   Write code that compares:
   - "b" > "a"
   - "A" > "a"
   Log results and explain in a comment what’s happening.
*/

/* ---------------------------
   34) for...of vs for...in
   ---------------------------
   Given: const arr = ["x","y","z"]
   Use for...of to log values.
   Use for...in to log indexes.
*/

/* ---------------------------
   35) Build a lookup object
   ---------------------------
   Given: const items = ["pen","pen","book","pen","book"]
   Build an object `counts` that ends up:
   { pen: 3, book: 2 }
   (Use a loop, not a library.)
*/

/* ---------------------------
   36) Nested loops (simple)
   ---------------------------
   Given:
   const students = [
     { name: "Ana", grades: [90, 80] },
     { name: "Mia", grades: [100, 95] }
   ];
   Use nested loops to log:
   "Ana -> 90"
   "Ana -> 80"
   "Mia -> 100"
   "Mia -> 95"
*/

/* ---------------------------
   37) Average grade per student
   ---------------------------
   Using the same students array from #36,
   compute and log each student's average grade like:
   "Ana average: 85"
*/

/* ---------------------------
   38) Find first value > 50
   ---------------------------
   Given: const nums = [10, 20, 55, 40, 60]
   Use a loop to find the FIRST value greater than 50.
   Store it in `firstOver50` and stop searching once found.
*/

/* ---------------------------
   39) Count how many are > 50
   ---------------------------
   Using the same nums array, count how many values are > 50.
   Store in `countOver50`.
*/

/* ---------------------------
   40) Build a filtered array (manual filter)
   ---------------------------
   Given: const nums = [1,2,3,4,5,6]
   Build a new array `evens` containing only even numbers.
   (Do not use .filter)
*/

/* ---------------------------
   41) Simple function + return
   ---------------------------
   Write a function `double(n)` that returns n * 2.
   Call it and log the result.
*/

/* ---------------------------
   42) Function that returns early
   ---------------------------
   Write a function `printPositive(n)`:
   - If n <= 0, return immediately
   - Otherwise console.log "Positive!"
   Test with -1 and 5.
*/

/* ---------------------------
   43) Mini: password validator
   ---------------------------
   Write a function `isValidPassword(pw)` that returns true if:
   - length >= 8
   - and it contains at least one number (0-9)
   Otherwise false.
   Test with "abc" and "abc12345".
*/

/* ---------------------------
   44) Mini: username cleanup
   ---------------------------
   Write a function `cleanUsername(name)`:
   - trim spaces
   - convert to lowercase
   Return the cleaned name.
   Test with "  Martin  ".
*/

/* ---------------------------
   45) Mini: safe access of missing key
   ---------------------------
   Given: const user = { name: "Ana" }
   Write code that checks if user.age exists.
   If not, set user.age = 0.
   Log user.
*/

/* ---------------------------
   46) Mini: build a report string
   ---------------------------
   Given: const user = { name: "Ana", points: 12 }
   Create a string:
   "Ana has 12 points."
   Use template literals.
*/

/* ---------------------------
   47) Mini: loop over string characters
   ---------------------------
   Write code that logs each character of the string "code"
   on its own line.
*/

/* ---------------------------
   48) Mini: remove first and last
   ---------------------------
   Given: const arr = [1,2,3,4,5]
   Remove the first and last items (mutate the array).
   Log the removed items and the final array.
   (Use shift and pop.)
*/

/* ---------------------------
   49) Mini: build range function
   ---------------------------
   Write a function `range(start, end)` that returns an array
   containing every integer from start to end inclusive.
   Example: range(3,7) => [3,4,5,6,7]
*/

/* ---------------------------
   50) Mini project: simple scoreboard
   ---------------------------
   Create an object `scores = {}`.
   Write a function `addScore(name, points)` that:
   - if name is not in scores, set it to 0
   - add points
   Write a function `printScores()` that logs each player and score.
   Test:
   addScore("Ana", 5)
   addScore("Ana", 2)
   addScore("Mia", 10)
   printScores()
*/
