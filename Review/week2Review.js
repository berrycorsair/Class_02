// 1. What is the significance of JavaScript in modern web development, and how does it differ from Java?

// A.
`JavaScript is a high-level scripting language used for web interactivity, while Java is a compiled language used mainly for backend systems.`

// B.
`JavaScript is used for creating databases, while Java is used for designing CSS stylesheets.`

// C.
`JavaScript is a backend language only, and Java is a frontend-only language.`

// D.
`JavaScript is only used to create mobile apps, while Java is used to create static HTML pages.`


// 2. Write a JavaScript alert function that dynamically accepts user input and displays it with the message: "You entered: [user input]"

// A.
const userInput1 = prompt("Enter something:");
alert(`You entered: ${userInput1}`);

// B.
const userInput2 = alert("Enter something:");
prompt(`You entered: ${userInput2}`);

// C.
let userInput3 = confirm("Enter something:");
alert("You entered: " + userInput3);

// D.
alert("Enter something:");
const userInput4 = prompt(`You entered: ${userInput4}`);


// 3. What are the key use cases of JavaScript in both client-side and server-side development?

// A.
`Client-side: DOM manipulation, event handling, form validation, animations, and dynamic content rendering.
Server-side: Backend logic, API development, real-time data handling with frameworks like Node.js.`

// B.
`Client-side: File system management and OS-level scripting.
Server-side: Styling web pages and creating SVG graphics.`

// C.
`Client-side: Database indexing and table normalization.
Server-side: Changing CSS layout and image compression.`

// D.
`Client-side: Creating shell scripts and handling network ports.
Server-side: Managing video rendering and generating PDF layouts.`


// 4. Explain how JavaScript manages strings internally and discuss the impact of immutability on performance.

// A.
`Strings are mutable, so changes to characters directly alter memory and improve performance.`

// B.
`Strings are immutable. Operations like concatenation create new strings, impacting memory and performance for large-scale manipulations.`

// C.
`JavaScript uses arrays to store strings, which makes them editable in-place.`

// D.
`Strings are garbage-collected manually, which helps prevent memory issues during editing.`


// 5. What are the key characteristics and use cases of the Boolean data type in JavaScript?

// A.
`Represents numeric precision. Used for mathematical functions and currency formatting.`

// B.
`Represents logical true or false. Used in conditions, loops, and toggling states in applications.`

// C.
`Used to store CSS styles as binary flags.`

// D.
`Represents text with styling options. Used in DOM manipulation and text animations.`


// 6. Describe how 'undefined' is different from 'null' in JavaScript, with examples of when each might be encountered.

// A.
`undefined: A keyword for deleting variables.
null: Used to represent numbers only.`

// B.
`undefined: Variable declared but not initialized.
null: Explicitly assigned absence of value.`

// C.
`undefined: Automatically converted to false.
null: Used to create loops in JavaScript.`

// D.
`undefined: A reserved string value.
null: The default value of a string variable.`


// 7. What is the difference between the terms 'undefined' and 'undeclared' in JavaScript?

// A.
`Undefined: Variable not declared.
Undeclared: Variable declared but with null value.`

// B.
`Undefined: Declared variable without a value.
Undeclared: Variable not declared; accessing it throws a ReferenceError.`

// C.
`Undefined: Used in strict mode only.
Undeclared: Global variable with a default value.`

// D.
`Undefined: Keyword used to declare functions.
Undeclared: A deprecated data type.`


// 8. How does JavaScript differentiate between 'null' and an empty object, and when should each be used?

// A.
`null represents no value. {} represents an empty but existing object.`

// B.
`null and {} are the same and used interchangeably in all cases.`

// C.
`null is used for numbers only, while {} is used for arrays.`

// D.
`null is a syntax error, and {} creates a new string.`


// 9. Describe the Symbol data type and provide an example where it can be used to prevent property name collisions.

// A.
`Symbols create unique keys for object properties.`

// B.
`Symbols are used to store images in memory.`

// C.
`Symbols act as default values for missing object properties.`

// D.
`Symbols convert all object properties into strings.`


// 10. What are the limitations of the BigInt data type, and how does it integrate with other number types in JavaScript?

// A.
`Cannot mix BigInt with Number. Limited support for mathematical functions.`

// B.
`BigInt is used to store text and integrates with strings.`

// C.
`BigInt automatically converts all numbers into strings.`

// D.
`BigInt is used for date formatting and supports timezones.`


// // 11. Write a function statement.*****

// // A.
// function declared() {
//   return "I'm declared";
// }

// // B.
// const declared = () => {
//   return "I'm declared";
// };

// // C.
// let declared = function() {
//   return "I'm declared";
// };

// // D.
// function: declared() => "I'm declared";


// 12. What is the difference between parameters and arguments in JavaScript?

// A.
`Parameters are defined in the function declaration,
while arguments are the actual values passed during a function call.`

// B.
`Parameters are values returned from a function,
arguments are loop counters.`

// C.
`Parameters are used only in arrow functions,
arguments are for regular functions.`

// D.
`Parameters and arguments are always the same thing
and can be used interchangeably.`


// // 13. How can default parameters be utilized effectively in JavaScript?******

// // A.
// `Default parameters are used to set fallback values
// when no argument is provided.`

// // B.
// `Default parameters make a function execute only once.`

// // C.
// `Default parameters force the function to return null.`

// // D.
// `Default parameters are required in every function definition.`


// // 14. What would happen if you tried to use a return statement outside of a function?*****

// // A.
// `A SyntaxError would occur because return is only valid inside functions.`

// // B.
// `JavaScript would automatically wrap it in a function and return the value.`

// // C.
// `The return value would go to the browser console by default.`

// // D.
// `The script would pause execution and wait for user input.`


// 15*. How do you include multiple external JavaScript files in an HTML document? Explain how loading order affects execution.

// A.
`Scripts load and execute in the order they appear unless async or defer is used.`

// B.
`All scripts execute simultaneously by default regardless of order.`

// C.
`Only the first script executes unless you use the "multiple" attribute.`

// D.
`Scripts are automatically sorted alphabetically by the browser before running.`


// 16*. Explain the purpose of the <script> tag and how attributes like 'defer' and 'async' affect JavaScript execution.

// A.
`defer: Scripts are loaded in order and executed after the HTML is parsed.
async: Scripts are loaded independently and executed as soon as they're ready.`

// B.
`defer: Prevents scripts from running altogether.
async: Delays all JavaScript until after a page reload.`

// C.
`defer: Only works with inline scripts.
async: Converts all scripts to synchronous loading.`

// D.
`defer: Used to download CSS.
async: Used to delay image loading.`


// 17. What is the main difference between variables declared with 'const' and 'let', beyond reassignment?

// A.
`const: Cannot be reassigned and must be initialized.
let: Can be reassigned and declared without initialization.`

// B.
`const: Can be redeclared in the same scope.
let: Automatically becomes a global variable.`

// C.
`const: Used only for strings.
let: Used only for numbers.`

// D.
`const: Declares a new HTML element.
let: Creates an empty object.`


// 18. Describe the block scope of a 'let' variable and how it prevents issues like variable hoisting.

// A.
`let is limited to the block it is declared in and avoids unintended access.`

// B.
`let automatically converts to global scope if used in a loop.`

// C.
`let variables are accessible anywhere after declaration, even outside the block.`

// D.
`let is hoisted just like var, making it globally available.`


// 19. What are the two types of comments in JavaScript, and how do they impact code readability and execution?

// A.
`Single-line: // Comment
Multi-line: /* Comment */
Comments improve readability and are ignored during execution.`

// B.
`Single-line: <!-- -->
Multi-line: <<< >>> 
Comments pause execution until removed.`

// C.
`Single-line: # Comment
Multi-line: /##/
Comments are rendered in the browser as tooltips.`

// D.
`Single-line: //
Multi-line: /* */
Comments are only valid in HTML files.`


// 20. What happens if you forget to include a 'break' statement in a JavaScript switch case?

// A.
`The switch will randomly select a case to execute.`

// B.
`Only the default case will run regardless of input.`

// C.
`The program will throw a SyntaxError and stop execution.`

// D.
`Without break, cases will "fall through" to subsequent cases.`


// 21. Which loop in JavaScript is best suited for iterating over objects?

// A.
`for...in`

// B.
`for...of`

// C.
`while`

// D.
`do...while`


// 22. How does the push() method behave when used on an array with a defined length?

// A.
`It replaces the last element in the array.`

// B.
`It appends to the end and updates the length.`

// C.
`It resets the array to an empty state.`

// D.
`It inserts the new value at the beginning of the array.`


// 23. What is the difference between dot notation and bracket notation when accessing object properties in JavaScript?

// A.
`Dot notation only works with valid identifiers, while bracket notation works with dynamic or unusual keys.`

// B.
`Dot notation: Always required in loops.
Bracket notation: Used for arrays only.`

// C.
`Dot notation: Used for variables only.
Bracket notation: Requires semicolons after each key.`

// D.
`Dot notation: Creates new properties.
Bracket notation: Deletes existing properties.`


// 24. How do you use the length property of an array to iterate over it dynamically, accounting for mutation?

// (Mutation refers to changing the contents or structure of an array after it has been created.
// This can include adding, removing, or modifying elements using methods like .push(), .pop(), 
// .splice(), or direct index assignment.)

// A.
`Use a for loop with the length property to handle dynamic updates.`

// B.
`Use the fixed number 10 in the loop condition to improve speed.`

// C.
`Use a while loop that ignores the array’s length.`

// D.
`The length property is only used for objects, not arrays.`


// 25. Write a for loop that iterates backward through an array and prints its elements to the console.
const arr = [1, 2, 3, 4];

// A.
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

// B.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// C.
for (let i = 1; i <= arr.length; i++) {
  console.log(arr[arr.length - i]);
}

// D.
for (let i = arr.length; i > 0; i--) {
  console.log(arr[i]);
}


// 26. Explain the difference between the == and === operators in JavaScript, and when strict equality should be used.

// A.
`== compares values with type coercion.
=== compares values without type coercion.`

// B.
`== and === both compare values without coercion.`

// C.
`== compares only strings, === compares only numbers.`

// D.
`=== is used only in switch statements, == is used only in if statements.`


// 27. What is the result of '10' - '5' + 5 in JavaScript, and why?

// A.
`105 — Because string concatenation occurs from left to right after subtraction.`

// B.
`"105" — Because all values are treated as strings during the operation.`

// C.
`0 — Because subtraction and addition cancel each other out.`

// D.
`10 — Because '10' and '5' are coerced to numbers, so '10' - '5' = 5, then 5 + 5 = 10.`


// 28. How do you efficiently access the last element of an array without knowing its length?
const newArr = [1, 2, 3];

// A.
newArr[arr.length - 1]

// B.
newArr[-1]

// C.
newArr[arr.length]

// D.
newArr.last()


// // 29*. Write a function to check if a given input is an array using multiple methods in JavaScript.*******

// // (Array.isArray() is a built-in method that returns true if the given value is an array.)

// // A.
// function checkArrayA(input) {
//   return Array.isArray(input);
// }

// // B.
// function checkArrayB(input) {
//   return typeof input === "array";
// }

// // C.
// function checkArrayC(input) {
//   return input.constructor === "Array";
// }

// // D.
// function checkArrayD(input) {
//   return input instanceof String;
// }


// 30. Explain how JavaScript distinguishes between undefined and uninitialized variables.

// A.
`undefined: Variable declared but not assigned.
Uninitialized: Accessing undeclared variables throws a ReferenceError.`

// B.
`undefined: A keyword for global constants.
Uninitialized: Automatically set to null.`

// C.
`undefined: Assigned to variables after they are deleted.
Uninitialized: Means the variable is hoisted to the top of the file.`

// D.
`undefined: Used for arrays only.
Uninitialized: Used for loops only.`


// 31. What does accessing a non-existent property of an object return?

// A.
`undefined`

// B.
`null`

// C.
`false`

// D.
`0`


// 32. What is hoisting in JavaScript?

// A.
`A feature where declarations are moved to the top of their scope.`

// B.
`A method for sorting arrays alphabetically.`

// C.
`A technique for delaying function execution.`

// D.
`A behavior that prevents variables from being accessed.`


// // 33. Which of the following best describes how hoisting applies to different declarations?*****[]

// // A.
// `Functions are fully hoisted; var is hoisted without initialization; let and const are hoisted but uninitialized.`

// // B.
// `All variables are hoisted and initialized.`

// // C.
// `Only let and const are hoisted.`

// // D.
// `var and let are not hoisted, but functions are.`


// 34. What is the difference between global and local scope in JavaScript, and how does var behave differently from let and const?

// A.
`Global scope is accessible everywhere.
Local scope is limited to functions or blocks.
var has function scope, while let and const have block scope.`

// B.
`Global scope is limited to one file.
Local scope exists only inside switch statements.
var and let both have block scope, const has none.`

// C.
`Global scope is created by using let only.
Local scope requires a return statement.
var and const behave the same inside loops.`

// D.
`Global and local scopes are determined by indentation level.
var and let can be reassigned globally, const cannot.`


// 35. Explain how block scoping works in JavaScript and provide examples of its usage.

// A.
`Variables declared with let or const are scoped to the block.`

// B.
`Block scoping only applies to for loops and switch cases.`

// C.
`Variables declared with var inside a block are inaccessible from global scope.`

// D.
`Block scoping automatically prevents redeclaration across all files.`


// 36. Which of the following code snippets will cause a ReferenceError?

// A.
{
  let x = 10;
  console.log(x);
}
console.log(x);

// B.
{
  var y = 20;
  console.log(y);
}
console.log(y);

// C.
let z = 30;
console.log(z);

// D.
{
  const w = 40;
  console.log(w);
}


// 37*. What is the difference between type coercion and type conversion in JavaScript?

// A.
`Type coercion is implicit conversion by JavaScript.
Type conversion is explicit conversion by the developer.`

// B.
`Type coercion happens only in strict mode.
Type conversion is only used for arrays.`

// C.
`Type coercion is when JavaScript throws an error on incompatible types.
Type conversion is done using typeof.`

// D.
`Type coercion and type conversion are two names for the same process.`


// 38. What will be the result of the following expression due to type coercion?

console.log("5" + 2);

// A.
7

// B.
52

// C.
NaN

// D.
"7"


// 39. What is the result of explicitly converting the string "5" to a number before addition?

console.log(Number("5") + 2);

// A.
52

// B.
"52"

// C.
7

// D.
"7"


// 40. How do for...of and for...in loops differ in JavaScript? Provide scenarios where each is preferable.

// A.
`for...of: Iterates over iterable objects like arrays.
for...in: Iterates over object keys.`

// B.
`for...of: Used only for strings.
for...in: Used only for arrays.`

// C.
`for...of: Always skips the first item in the collection.
for...in: Returns values instead of keys.`

// D.
`for...of: Used for DOM elements.
for...in: Used for CSS stylesheets.`


// // 41. Explain the difference between Object.keys(), Object.values(), and Object.entries().****

// // A.
// `Object.keys(): Returns an array of object keys.
// Object.values(): Returns an array of object values.
// Object.entries(): Returns an array of key-value pairs.`

// // B.
// `Object.keys(): Creates keys.
// Object.values(): Creates values.
// Object.entries(): Converts arrays to objects.`

// // C.
// `Object.keys(): Loops over arrays.
// Object.values(): Filters properties.
// Object.entries(): Converts keys to strings.`

// // D.
// `Object.keys(): Used only in JSON.
// Object.values(): Only works in Node.js.
// Object.entries(): Returns undefined.`


// // 42. What is the purpose of the Object.freeze() method in JavaScript, and how does it compare to Object.seal()?*****

// // A.
// `Object.freeze(): Makes an object immutable (no additions, deletions, or modifications).
// Object.seal(): Prevents additions or deletions but allows modification of existing properties.`

// // B.
// `Object.freeze(): Allows all changes.
// Object.seal(): Freezes the entire object and its prototype chain.`

// // C.
// `Object.freeze(): Deletes all object properties.
// Object.seal(): Adds default values to missing keys.`

// // D.
// `Object.freeze(): Works only on arrays.
// Object.seal(): Used to make functions readonly.`


// 43. Which of the following are examples of mutable data in JavaScript?

// A.
[1, 2, 3], { name: "Ximena" }

// B.
42, "hello", true

// C.
Object.freeze({ id: 1 }), null

// D.
NaN, undefined, Symbol("id")


// 44. Which of the following are examples of immutable data in JavaScript?

// A.
42, "hello", true

// B.
[1, 2, 3], { name: "Ximena" }

// C.
new Array(), new Object()

// D.
Object.assign({}, obj)


// // 45. What is the purpose of JavaScript's Object.assign() method?*****

// // A.
// `Merges objects`

// // B.
// `Deletes object keys`

// // C.
// `Converts arrays into objects`

// // D.
// `Freezes object values`

// 46. How does JavaScript handle immutability with objects and arrays?

// A.
`Use Object.freeze() to prevent modification.`

// B.
`Declare them with let instead of var.`

// C.
`Convert them to strings before assignment.`

// D.
`Store them in a constant function.`


// 47*. How does JavaScript handle shadowing in block scopes with variables declared using let and const?

// (Shadowing occurs when a variable declared in a local block scope has the same name as one in an outer scope. The inner declaration temporarily "shadows" the outer variable within that block.)

let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);

// What will be the correct output?

// A.
2
2

// B.
2
1

// C.
1
2

// D.
ReferenceError
