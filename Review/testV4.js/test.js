const questions = [

  { text: "What is the output of `typeof Symbol()`?", options: ["symbol", "object", "string", "function"], answer: 0 },
  { text: "What loop guarantees at least one run?", options: ["while", "do...while", "for", "none"], answer: 1 },
  { text: "What keyword is used to inherit from another class?", options: ["inherit", "this", "extends", "parent"], answer: 2 },
  { text: "What is the purpose of the yield keyword in JavaScript generator functions?", options: ["It returns a value from the generator function", "It suspends the execution of the generator function and returns a value", "It terminates the execution of the generator function and returns a value", "It creats a new array"], answer: 1 },
  { text: "What value is considered falsy?", options: ['"0"', "null", '"false"', "[]"], answer: 1 },
  { text: "Which function type is hoisted?", options: ["Function expression", "Arrow function", "Function declaration", "Callback"], answer: 2 },
  { text: "What is the purpose of the label statement in JavaScript loops?", options: ["To specify the name of the loop variable", "To specify a name for the loop, which can be used with break and continue statements", "To specify a name for the loop, which can be used with return statements", "Does not do anything"], answer: 1 },
  { text: "What does filter() do?", options: ["Sort values", "Return elements based on condition", "Remove first", "Return undefined"], answer: 1 },
  { text: "What does continue do?", options: ["Ends loop", "Skips current iteration", "Repeats loop", "Exits function"], answer: 1 },
  { text: "What does try...catch do?", options: ["Terminates app", "Handles errors", "Avoids loops", "Declares variables"], answer: 1 },
  { text: "What does Object.entries(obj) return?", options: ["Array of arrays", "String", "Keys only", "Functions only"], answer: 0 },
  { text: "What is the purpose of `return` in a function?", options: ["Ends function", "Returns a value", "Both", "None"], answer: 2 },
  { text: "Which loop is best for array values?", options: ["for...in", "for...of", "while", "switch"], answer: 1 },
  { text: "What does `!==` compare?", options: ["Type only", "Value only", "Value and type", "None"], answer: 2 },
  { text: "What symboles are used for equal?", options: ["!==", "==","===", "Both == and ==="], answer: 3 },
  { text: "What is the index of the first item in an array?", options: ["0", "1", "-1", "undefined"], answer: 0 },
  { text: "What does class method overriding do?", options: ["Deletes method", "Replaces parent method", "Declares variable", "Skips constructor"], answer: 1 },
  { text: "What is the correct format for a for loop?", options: ["for (init; cond; incr)", "for cond", "for () {}", "repeat()"], answer: 0 },
  { text: "What is the purpose of a class?", options: ["Iterate array", "Blueprint for objects", "Sort arrays", "Error handling"], answer: 1 },
  { text: "What does Boolean(null) return?", options: ["true", "null", "false", "NaN"], answer: 2 },
  { text: "Which keyword runs if no if/else condition is true?", options: ["skip", "stop", "else", "default"], answer: 2 },
  { text: "What is the result of `true || false`?", options: ["true", "false", "null", "undefined"], answer: 0 },
  { text: "What does forEach() return?", options: ["A new array", "Nothing", "An object", "A string"], answer: 1 },
  { text: "Which loop checks the condition before the first run?", options: ["do...while", "for", "while", "loop"], answer: 2 },
  { text: "Which array method adds an element to the end?", options: ["push()", "pop()", "shift()", "unshift()"], answer: 0 },
  { text: "What is a parameter?", options: ["A function call", "A return value", "A placeholder in a function", "A loop counter"], answer: 2 },
  { text: "What is the difference between var and let in terms of scope?", options: ["var has function scope, while let has block scope.", "var and let have the same scope.", "var has block scope, while let has function scope.", "None of the above."], answer: 0 },
  { text: "What is the type of 'Hello'?", options: ["String", "Number", "Boolean", "Object"], answer: 0 },
  { text: "What does the `++` operator do?", options: ["Subtracts 1", "Multiplies", "Increments by 1", "Divides"], answer: 2 },
  { text: "What is the outcome of ('5'-'5')?", options: ["55", "5", "0", "25"], answer: 2 },
  { text: "What is JSON in JavaScript?", options: ["A data format that stands for JavaScript Object Notation", "A function that converts objects to strings and vice versa", "A JavaScript method for parsing JSON data", "A data type"], answer: 0 },
  { text: "Which notation is used to access object keys with spaces?", options: ["dot", "bracket", "arrow", "slash"], answer: 1 },
  { text: "What does Object.keys(obj) return?", options: ["An array of values", "A number", "An array of keys", "Undefined"], answer: 2 },
  { text: "What is the difference between dot notation and bracket notation when accessing object properties?", options: ["There is no difference", "Dot notation is used with string property names, while bracket notation is used with numeric property names", "Dot notation is used with numeric property names, while bracket notation is used with string property names", "Neither b nor c"], answer: 1 },
  { text: "What is the purpose of the let and const keywords in JavaScript?", options: ["They are used to declare functions.", "They are used to declare variables with block scope.", "They are used to declare global variables.", "They are used to create objects."], answer: 1 },
  { text: "What does setTimeout() require?", options: ["A string", "Two arguments", "Only time", "A loop"], answer: 2 },
  { text: "What kind of error is `let a = b;` if `b` is undefined?", options: ["TypeError", "ReferenceError", "SyntaxError", "RangeError"], answer: 1 },
  { text: "Which operator is used to concatenate strings?", options: ["+", "*", "&", "%"], answer: 0 },
  { text: "What is the value of a variable declared but not initialized?", options: ["null", '""', "0", "undefined"], answer: 3 },
  { text: "What is a function?", options: ["A loop", "A variable", "A reusable block of code", "A data type"], answer: 2 },
  { text: "What is the basic structure of an if statement?", options: ["if () => {}", "if condition", "if (condition) {}", "if: condition"], answer: 2 },
  { text: "What does .slice() return?", options: ["Modified array", "Same array", "Shallow copy", "Filtered array"], answer: 2 },
  { text: "What is `5 ** 2`?", options: ["7", "10", "25", "52"], answer: 2 },
  { text: "What is the result of 100 / 0?", options: ["Error", "NaN", "Infinity", "0"], answer: 2 },
  { text: "What is `false && true`?", options: ["true", "false", "undefined", "error"], answer: 1 },
  { text: "What will `if (0)` evaluate to?", options: ["true", "false", "undefined", "error"], answer: 1 },
  { text: "Which is a correct BigInt declaration?", options: ["let x = 9999b", "let x = 9999n", "let x = BigInt", "let x = big(9999)"], answer: 1 },
  { text: "What does the ternary operator do?", options: ["Declares a variable", "Assigns a string", "Short-hand if...else", "Loops through elements"], answer: 2 },
  { text: "What is a callback function?", options: ["A function that returns another", "A function passed into another function", "A loop", "A conditional"], answer: 1 },
  { text: "What symboles are used for not eqaul?", options: ["!=", "Both != and !==", "==", "!=="], answer: 1 },
  { text: "Which is a correct function declaration?", options: ["function greet() {}", "greet = function() {}", "let greet() {}", "def greet()"], answer: 0 },
  { text: "Which operator returns the remainder?", options: ["/", "%", "**", "=="], answer: 1 },
  { text: "What does `super()` do?", options: ["Returns object", "Calls parent constructor", "Ends method", "Declares method"], answer: 1 },
  { text: "What does `const` prevent?", options: ["Redeclaration", "Reassignment", "Access", "Scope"], answer: 1 },
  { text: "What does .length return on an array?", options: ["Number of characters", "Number of elements", "Index", "Last element"], answer: 1 },
  { text: "What does `throw` do?", options: ["Declares variable", "Loops code", "Raises exception", "None"], answer: 2 },
  { text: "What does `instanceof` return?", options: ["Error", "String", "Boolean", "undefined"], answer: 2 },
  { text: "What is a closure in JavaScript?", options: ["Comes at the end of a function", "By defining a function inside another functionand returning it", "A function that has access to variables in its outer function", "Yes"], answer: 2 },
  { text: "How do you add an external JavaScript file to a HTML file?", options: ["JavaScript", "script src", "js", "script"], answer: 1 },
  { text: "What is the purpose of the default parameters in JavaScript?", options: ["To provide a default value if an argument is not specified", "By assigning a value", "There is no purpose", "The function is in error mode"], answer: 0 },
  { text: "Which error occurs if you use wrong type?", options: ["TypeError", "SyntaxError", "RangeError", "LogicError"], answer: 0 },
  { text: "What is the purpose of the if...else statement in JavaScript?", options: ["To execute a block of code if a condition is true, and a different block of code if the condition is false.", "To define a function", "To repeat a block of code while a condition is true", "To prove a function wrong"], answer: 0 },
  { text: "What is the purpose of the Virtual DOM?", options: ["It is an in-memory representation of the real DOM, making UI updates more efficient", "It is a database for storing HTML", "It directly replaces the real DOM", "It deletes unused HTML elements"], answer: 0 },
  { text: "Which array method removes the last item?", options: ["push()", "shift()", "unshift()", "pop()"], answer: 3 },
  { text: "Which keyword is used to declare a variable that can be reassigned?", options: ["const", "var", "let", "static"], answer: 2 },
  { text: "How do you remove a property from a JavaScript object?", options: ["Using the removeProperty method", "By setting the value of the property to null", "By using the delete operator with the property name", "you can't"], answer: 2 },
  { text: "What is used for a single row of comments?", options: ["//", "/*", "Comment", "None"], answer: 0 },
  { text: "What’s the syntax for a ternary?", options: ["condition ? true : false", "if condition: true", "condition then true else false", "All of the above"], answer: 0 },
  { text: "Explain the concept of the Virtual DOM. How does it differ from the real DOM?", options: ["It is the actual browser DOM updated directly.", "It is a copy of CSS rules used for faster styling.", "It is an in-memory representation of the real DOM, updates are batched efficiently.", "It is only used in Node.js."], answer: 2 },
  { text: "What is event delegation in JavaScript, and how does it improve performance in dynamic DOM manipulation?", options: ["It attaches a listener to each child element individually.", "It attaches a listener to a parent element, handling events for child elements dynamically.", "It requires duplicating event listeners for efficiency.", "It prevents events from bubbling."], answer: 1 },
  { text: "Explain the spread operator in JavaScript and provide examples of how it is used with arrays and objects.", options: ["It compresses arrays into one element.", "It expands arrays or objects into individual elements or properties.", "It sorts array elements.", "It removes duplicates from objects."], answer: 1 },
  { text: "What does the try block do in JavaScript exception handling?", options: ["Declares a variable", "Executes code that might throw errors", "Always handles the error", "Ends the program"], answer: 1 },
  { text: "What does the catch block do in JavaScript exception handling?", options: ["Ignores the error", "Handles errors when they occur", "Throws a new error", "Declares variables"], answer: 1 },
  { text: "What does the finally block do in JavaScript exception handling?", options: ["Runs only on error", "Skips try and catch", "Always runs after try/catch regardless of the result", "Declares functions"], answer: 2 },
  { text: "What does the throw statement do in JavaScript?", options: ["Declares a loop", "Raises an exception manually", "Ends a function", "Catches an error"], answer: 1 },
  { text: "Write a JavaScript statement to display 'Hello, how are you?' in the console and as part of an HTML element simultaneously.", options: ["console.log('Hello, how are you?'); document.getElementById('output').innerText = 'Hello, how are you?';", "print('Hello, how are you?')", "alert('Hello, how are you?') only", "document.write('Hello, how are you?')"], answer: 0 },
  { text: "Which method selects an element by its unique ID?", options: ["querySelector", "getElementById", "getElementsByClassName", "getElementsByTagName"], answer: 1 },
  { text: "When would you use querySelector over getElementById?", options: ["When you want to select the first element matching a CSS selector", "When you only need to select by unique ID", "When you want faster performance", "When you want to delete an element"], answer: 0 },
  { text: "Which symbol is used for strict equality?", options: ["==", "===", "!==", "="], answer: 1 },
  { text: "What is the output of `5 + '5'`?", options: ["10", "'55'", "55", "Error"], answer: 1 },
  { text: "Which operator returns the remainder of a division?", options: ["/", "%", "**", "//"], answer: 1 },
  { text: "What is `var` primarily scoped to?", options: ["Global", "Function", "Block", "Module"], answer: 1 },
  { text: "Which of the following is a correct single-line comment in JavaScript?", options: ["// This is a comment", "<!-- This is a comment -->", "# This is a comment", "/* This is a comment */"], answer: 0 },
  { text: "Which of the following is NOT part of the basic structure of a JavaScript program?", options: ["Variables", "Functions", "HTML closing tags", "Operators"], answer: 2 },
  { text: "Which of the following lists all 8 primary data types in JavaScript?", options: ["string, number, boolean, null, undefined, object, symbol, bigint", "string, number, boolean, null, undefined, object, array, bigint", "text, number, boolean, object, array, symbol, bigint, null", "string, integer, float, boolean, null, undefined, object, bigint"], answer: 0 },
  { text: "What will `typeof 9007199254740991n` return?", options: ["bigint", "number", "string", "undefined"], answer: 0 },
  { text: "What is the result of `10 % 3`?", options: ["3", "1", "0", "10"], answer: 1 },
  { text: "Which of the following uses a ternary operator correctly?", options: ["if (x > 5) ? 'big' : 'small'", "x > 5 ? 'big' : 'small'", "x > 5 ? 'big'; else 'small';", "x ? > 5 : 'big' : 'small'"], answer: 1 },
  { text: "Which variable declaration is hoisted to the top of its scope?", options: ["let", "const", "var", "Both var and let"], answer: 2 },
  { text: "Which keyword should you generally use for variables that will not be reassigned?", options: ["var", "let", "const", "static"], answer: 2 },
  { text: "Which statement about arrow functions is TRUE?", options: ["They have their own 'this' value", "They do not have their own 'this' value", "They can be used as constructors", "They must always have parentheses"], answer: 1 },
  { text: "Which syntax correctly defines an arrow function that takes one parameter?", options: ["x => x * 2", "(x) -> x * 2", "function(x) => x * 2", "(x) => { return x * 2; }"], answer: 0 },
  { text: "What is the result of `null == undefined`?", options: ["true", "false", "null", "undefined"], answer: 0 },
  { text: "What is the result of `null === undefined`?", options: ["true", "false", "null", "undefined"], answer: 1 },
  { text: "Where is it best practice to place <script> tags for JavaScript in an HTML document for faster page loading?", options: ["At the very top of <head>", "Anywhere in the HTML", "At the end of the <body>", "Inside CSS files"], answer: 2 },
  { text: "What is the result of `Math.floor(7 / 2)`?", options: ["3.5", "4", "3", "2"], answer: 2 },
  { text: "Which of the following is a correct multi-line comment in JavaScript?", options: ["// comment //", "/* comment */", "<!-- comment -->", "# comment #"], answer: 1 },
  { text: "Which value is NOT falsy in JavaScript?", options: ["0", '""', "NaN", "{}"], answer: 3 },
  { text: "What does `typeof null` evaluate to?", options: ["null", "object", "undefined", "boolean"], answer: 1 },
  { text: "What does `Number('5')` return?", options: ["'5'", "5", "NaN", "undefined"], answer: 1 },
  { text: "What does `parseInt('08', 10)` return?", options: ["0", "8", "NaN", "80"], answer: 1 },
  { text: "Which template literal is valid?", options: ["'Hello, ${name}!'", "`Hello, ${name}!`", '"Hello, ${name}!"', "template('Hello, ${name}!')"], answer: 1 },
  { text: "What is the result of `'5' == 5`?", options: ["true", "false", "NaN", "Throws error"], answer: 0 },
  { text: "What is the result of `'5' === 5`?", options: ["true", "false", "NaN", "Throws error"], answer: 1 },
  { text: "Which statement about hoisting is TRUE?", options: ["let/const variables are initialized to undefined at the top", "var declarations are hoisted, not initializations", "Function expressions are hoisted like declarations", "Nothing is hoisted in JS"], answer: 1 },
  { text: "Which is best practice for variables that may change later?", options: ["const", "var", "let", "static"], answer: 2 },
  { text: "Which loop iterates over object keys by default?", options: ["for...of", "for...in", "while", "do...while"], answer: 1 },
  { text: "What does `Array.prototype.map()` return?", options: ["A new array", "The same array", "A number", "undefined"], answer: 0 },
  { text: "What does `Array.prototype.filter()` expect from its callback?", options: ["A number", "A boolean", "A string", "An object"], answer: 1 },
  { text: "What is the initial value used for in `reduce`?", options: ["To set the first element", "To seed the accumulator", "To set array length", "To map indices"], answer: 1 },
  { text: "What does `unshift()` do?", options: ["Adds to start", "Adds to end", "Removes last", "Removes first"], answer: 0 },
  { text: "What does `splice(1, 2)` do on an array?", options: ["Copies items", "Removes 2 items starting at index 1", "Adds 2 items at index 1", "Sorts array"], answer: 1 },
  { text: "What does `slice(1, 3)` return?", options: ["Items at indices 1 and 2", "Items at indices 1,2,3", "Original array changed", "Undefined"], answer: 0 },
  { text: "Which statement about `NaN` is TRUE?", options: ["NaN === NaN is true", "NaN === NaN is false", "typeof NaN is 'undefined'", "isNaN(NaN) is false"], answer: 1 },
  { text: "Which operator checks both value and type equality?", options: ["==", "=", "===", "=>"], answer: 2 },
  { text: "Which `switch` feature matches when no case matches?", options: ["stop", "finally", "default", "else"], answer: 2 },
  { text: "What is the unit for the delay argument in `setTimeout`?", options: ["seconds", "milliseconds", "microseconds", "frames"], answer: 1 },
  { text: "Which is TRUE about arrow functions and `this`?", options: ["They bind `this` dynamically", "They inherit `this` from the surrounding scope", "They create a new `this` with `new`", "They cannot return values"], answer: 1 },
  { text: "Which object access is required for a key with a space?", options: ["obj.key name", "obj['key name']", "obj.key-name", "obj(key name)"], answer: 1 },
  { text: "Which destructuring is valid for objects?", options: ["const [a, b] = obj", "const {a, b} = obj", "const (a, b) = obj", "const <a, b> = obj"], answer: 1 },
  { text: "What does the spread operator do with objects?", options: ["Merges properties into a new object", "Sorts object keys", "Converts to an array", "Deletes properties"], answer: 0 },
  { text: "What does `JSON.parse('\"42\"')` return?", options: ["42", "'42'", "NaN", "undefined"], answer: 1 },
  { text: "What does `JSON.stringify({ a: 1 })` return?", options: ['{ a: 1 }', '"{ a: 1 }"', `'{"a":1}'`, "undefined"], answer: 2 },
  { text: "Which is a valid BigInt operation?", options: ["1n + 2", "1 + 2n", "1n + 2n", "BigInt + 1"], answer: 2 },
  { text: "Which best describes a callback function?", options: ["A function that executes immediately", "A function passed as an argument to another function", "A function that returns a function", "A loop replacement"], answer: 1 },
  { text: "Which placement of `<script>` helps avoid blocking rendering without `defer`?", options: ["Top of <head>", "Middle of <body>", "End of <body>", "Inside CSS"], answer: 2 },
  { text: "Which directive enables strict mode in JavaScript?", options: [`"use strict";`, "`use strict`", "strict_mode(true);", "enable.strict()"], answer: 0 },
  { text: "What does `typeof function() {}` return?", options: ["object", "function", "callable", "undefined"], answer: 1 },
  { text: "Which of the following is truthy?", options: ["0", '""', "NaN", "'0'"], answer: 3 },
  { text: "What does `Number.isNaN('NaN')` return?", options: ["true", "false", "NaN", "undefined"], answer: 1 },
  { text: "What does `isNaN('42')` return?", options: ["true", "false", "42", "undefined"], answer: 1 },
  { text: "Which method creates a shallow copy of an array without modifying the original?", options: ["slice()", "splice()", "pop()", "sort()"], answer: 0 },
  { text: "What does `[...arr]` do?", options: ["Creates a deep copy of arr", "Creates a shallow copy of arr", "Sorts arr", "Mutates arr by adding elements"], answer: 1 },
  { text: "Which defines a default parameter correctly?", options: ["function f(x := 10) {}", "function f(x = 10) {}", "function f(default x 10) {}", "function f(x) = 10 {}"], answer: 1 },
  { text: "Which syntax correctly declares a rest parameter?", options: ["function sum(args...) {}", "function sum(...args) {}", "function sum(..args) {}", "function sum(args**) {}"], answer: 1 },
  { text: "Which array method returns the first element that matches a test function?", options: ["filter()", "find()", "includes()", "some()"], answer: 1 },
  { text: "Which array method returns the index of the first element that matches a test function?", options: ["indexOf()", "findIndex()", "search()", "position()"], answer: 1 },
  { text: "What does `Object.freeze(obj)` do?", options: ["Prevents adding/removing but allows changing values", "Prevents adding, removing, or changing existing values", "Allows adding but not removing properties", "Converts the object to JSON"], answer: 1 },
  { text: "What does `Object.seal(obj)` do?", options: ["Prevents adding/removing and changing values", "Prevents adding/removing but allows changing existing values", "Prevents reading values", "Deeply locks nested objects"], answer: 1 },
  { text: "Which comparison evaluates to true?", options: ["'0' == 0", "null == 0", "0 === false", "NaN == NaN"], answer: 0 },
  { text: "What does `Array.from('hey')` return?", options: ["['hey']", "['h','e','y']", "['he','y']", "['h','ey']"], answer: 1 },
  { text: "Which call returns true?", options: ["Number.isInteger('3')", "Number.isInteger(3.1)", "Number.isInteger(3.0)", "Number.isInteger(NaN)"], answer: 2 },
  { text: "Which method merges two arrays without mutating either source array?", options: ["push()", "concat()", "splice()", "unshift()"], answer: 1 },
  { text: "What is the output of `for (var i=0;i<3;i++){ setTimeout(()=>console.log(i),0) }`?", options: ["0 1 2", "3 3 3", "0 0 0", "Error"], answer: 1 },
  { text: "Which example correctly creates a multiline string?", options: ["'Line 1\nLine 2'", "`Line 1\nLine 2`", '"Line 1\\nLine 2"', "template(`Line 1`, `Line 2`)"], answer: 1 },
  { text: "What does `Date.now()` return?", options: ["A Date object", "Milliseconds since Jan 1, 1970 (UTC)", "Seconds since Jan 1, 1970 (UTC)", "An ISO string"], answer: 1 },
  { text: "Which operator checks both value and type?", options: ["==", "===", "!=", "<="], answer: 1 },
  { text: "Which value is NOT falsy?", options: ["0", "false", "[]", "NaN"], answer: 2 },
  { text: "What is the result of `'5' + 3` in JavaScript?", options: ["8", "'53'", "53", "Error"], answer: 1 },
  { text: "What is the result of `5 + true`?", options: ["6", "5true", "NaN", "Error"], answer: 0 },
  { text: "Which symbol starts a single-line comment in JavaScript?", options: ["//", "/*", "#", "<!--"], answer: 0 },
  { text: "What is the value of `typeof []`?", options: ["array", "object", "list", "undefined"], answer: 1 },
  { text: "What is the value of `2 ** 3`?", options: ["6", "8", "9", "Error"], answer: 1 },
  { text: "Which keyword stops the execution of a loop?", options: ["break", "stop", "exit", "return"], answer: 0 },
  { text: "Which keyword skips to the next loop iteration?", options: ["skip", "next", "continue", "pass"], answer: 2 },
  { text: "Which built-in method reverses the order of array elements?", options: ["flip()", "reverse()", "invert()", "turn()"], answer: 1 },
  { text: "Which method adds elements to the start of an array?", options: ["push()", "unshift()", "shift()", "prepend()"], answer: 1 },
  { text: "What is returned by `Boolean('false')`?", options: ["false", "true", "undefined", "NaN"], answer: 1 },
  { text: "Which variable declaration can be reassigned but not redeclared?", options: ["var", "let", "const", "static"], answer: 1 },
  { text: "Which variable declaration cannot be reassigned?", options: ["var", "let", "const", "static"], answer: 2 },
  { text: "What will `console.log(0.1 + 0.2 === 0.3)` print?", options: ["true", "false", "Error", "NaN"], answer: 1 },
  { text: "Which method joins array elements into a string?", options: ["join()", "concat()", "toString()", "merge()"], answer: 0 },
  { text: "What is the index of the last element in an array with length 5?", options: ["4", "5", "0", "undefined"], answer: 0 },
  { text: "Which of the following is NOT a JavaScript data type?", options: ["boolean", "float", "symbol", "bigint"], answer: 1 },
  { text: "Which function converts a JSON string to an object?", options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "toObject()"], answer: 0 },
  { text: "Which function converts an object to a JSON string?", options: ["JSON.parse()", "JSON.stringify()", "toJSON()", "objectToString()"], answer: 1 },
  { text: "What is the result of `typeof NaN`?", options: ["NaN", "undefined", "number", "object"], answer: 2 },
  { text: "Which operator is used for exponentiation?", options: ["^", "**", "pow", "exp"], answer: 1 },
  { text: "Which string method returns the length of a string?", options: ["size()", "length", "count()", "chars()"], answer: 1 },
  { text: "Which loop always executes at least once?", options: ["for", "while", "do...while", "foreach"], answer: 2 },
  { text: "Which keyword is used to define a function in JavaScript?", options: ["func", "def", "function", "fn"], answer: 2 },
  { text: "Which value does `Array.isArray([])` return?", options: ["true", "false", "undefined", "null"], answer: 0 }

];








function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function normalizeText(s) { 
  return s.trim().toLowerCase().replace(/\s+/g,' '); 
}

// NEW helper: escape HTML so tags display literally
function escapeHTML(s){
  return String(s)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#39;');
}

function buildQuiz() {
  const quizForm = document.getElementById("quizForm");
  if (!quizForm) return;

  quizForm.innerHTML = "";

  // De-dupe by normalized text
  const dedupedQuestions = Array.from(
    new Map(questions.map(q => [normalizeText(q.text), q])).values()
  );

  // Select random subset up to 90
  const pool = [...dedupedQuestions];
  shuffleArray(pool);
  const LIMIT = 90;
  const selected = pool.slice(0, Math.min(LIMIT, pool.length));

  // Shuffle selected questions
  const shuffledQuestions = [...selected];
  shuffleArray(shuffledQuestions);

  // Shuffle options + track correct answer
  window.shuffledQuestions = shuffledQuestions.map(q => {
    const tagged = q.options.map((opt, idx) => ({ opt, idx }));
    shuffleArray(tagged);
    const correctIndex = tagged.findIndex(t => t.idx === q.answer);
    return { text: q.text, options: tagged.map(t => t.opt), answer: correctIndex };
  });

  // Render
  window.shuffledQuestions.forEach((q, i) => {
    const block = document.createElement("div");
    block.id = `q${i}`;
    block.innerHTML = `
      <p><strong>${i + 1}. ${escapeHTML(q.text)}</strong></p>
      ${q.options.map((opt, j) =>
        `<label><input type="radio" name="q${i}" value="${j}"> ${escapeHTML(opt)}</label><br>`
      ).join("")}
    `;
    quizForm.appendChild(block);
  });
}

let timerInterval;
let startTime;

function startTimer() {
  const container = document.getElementById("quizContainer");
  if (container) container.style.display = "block";

  buildQuiz();

  const startBtn = document.getElementById("startBtn");
  if (startBtn) startBtn.style.display = "none";

  startTime = Date.now();
  const timerDisplay = document.getElementById("timer");

  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    const elapsedMs = Date.now() - startTime;
    const seconds = Math.floor((elapsedMs / 1000) % 60);
    const minutes = Math.floor((elapsedMs / 1000 / 60) % 60);
    if (timerDisplay) {
      timerDisplay.innerText = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function submitAnswers() {
  stopTimer();

  const shuffledQuestions = window.shuffledQuestions || [];
  let score = 0;

  shuffledQuestions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    const questionBlock = document.getElementById(`q${i}`);

    if (selected) {
      const selectedIndex = Number(selected.value);
      if (selectedIndex === q.answer) {
        score++;
        if (questionBlock) questionBlock.style.borderLeft = "4px solid green";
      } else {
        if (questionBlock) {
          questionBlock.style.borderLeft = "4px solid red";
          const feedback = document.createElement("p");
          feedback.style.color = "red";
          feedback.textContent = `❌ Correct answer: ${q.options[q.answer]}`;
          questionBlock.appendChild(feedback);
        }
      }
    } else {
      if (questionBlock) {
        questionBlock.style.borderLeft = "4px solid orange";
        const feedback = document.createElement("p");
        feedback.style.color = "orange";
        feedback.textContent = `⚠️ No answer selected. Correct: ${q.options[q.answer]}`;
        questionBlock.appendChild(feedback);
      }
    }
  });

  const resultEl = document.getElementById("result");
  if (resultEl) {
    resultEl.innerText = `You scored ${score} out of ${shuffledQuestions.length}`;
  }
}

window.startTimer = startTimer;
window.submitAnswers = submitAnswers;




