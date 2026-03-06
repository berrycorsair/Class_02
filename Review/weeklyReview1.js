// ===================
// Weekly Review — Exercises (30)
// ===================

// 1) Declare a let variable called firstName with any string and print it.
// 2) Reassign firstName to a different string and print it again.
// 3) Declare a const called birthYear and print it.
// 4) Create variables holding each primitive: String, Number, BigInt, Boolean, Symbol, undefined, null.
//    Print typeof for each (use explicit values).
// 5) Use String(), Number(), Boolean(), and BigInt() constructors on suitable values and print their results & types.

// 6) Use unary plus to convert the string "42" to a number and print its type/value.
// 7) Use unary minus to convert "7" and negate it; print its type/value.
// 8) Demonstrate prefix and postfix: let n = 5; print console.log(n++), then n; reset to 5 and print console.log(++n).
// 9) Start with let x = 10; apply x += 5, then x *= 2; print x.
// 10) Compute and print: 25 % 6 and 3 ** 4.

// 11) Concatenate "Happy New " with "Year " and 2025 using += (step by step). Print final string & its typeof.
// 12) What does "10" + 5 produce? Print value & typeof.
// 13) What does "10" * 5 produce? Print value & typeof.
// 14) Template literal: let name = "Alex"; print `Hello, ${name}`.

// 15) Create an object person with keys: name, age, email. Print age via dot and email via bracket notation.
// 16) Add a new key person["current-age"] = age (with a dash). Print it via bracket notation.
// 17) Create array mix = [14, "Martin", true, undefined, null, [12n, 25n, 12n], [1,2,"Felix"]]; 
//     Print the first element of the BigInt subarray and the last element of the final subarray.
// 18) Given:
//     const users = [{name:"Calvin",surname:"Hart",age:66,email:"email.email.com"},
//                    {name:"Mateus",surname:"Pinto",age:21,email:"MateusPinto@email.com",social:["facebook","Instagram","X"]}];
//     Print Mateus's email and his first social network.

// 19) Logical AND: print results of true && true, true && false, false && true.
// 20) Logical OR: print results of false || true, false || false, true || false.
// 21) Logical NOT: print results of !true, !false, !0.
// 22) Non-boolean with && and ||: print "Hello" && "World", 0 && "World", "" || "Default", "First" || "Second".
// 23) Precedence: print result of false || 0 && "hi" (no comments).

// 24) Comparison (strict vs loose): print 10 === "10" and 10 == "10".
// 25) More comparisons: print 5 !== "5" and 7 != 3.
// 26) Relational: print 12 > 9, 12 <= 9.
// 27) typeof quirks: print typeof null and typeof NaN.

// 28) instanceof checks:
//     const arr = ["Patti","Bob"]; const one = arr[0];
//     Print (arr instanceof Array) and (one instanceof Array).

// 29) Ternary (simple, not nested): 
//     let age = 24; print(age >= 25 ? "You can get car insurance" : "You are too young");

// 30) User input (browser only, single ternary, no if):
//     If confirm("Continue?") is OK, prompt for a name and alert "Hello <name>!".
//     Otherwise alert "Goodbye!".


// ===================
// Multiple Choice (15)
// ===================

// 31) What is the result of "5" + 3?
// a) "53"   b) 8   c) NaN   d) error

// 32) What is the result of "5" * 3?
// a) "53"   b) 15  c) NaN   d) "15"

// 33) Which operator checks both value and type?
// a) ==   b) =   c) ===   d) !=

// 34) What is typeof null?
// a) "null"   b) "object"   c) "undefined"   d) "boolean"

// 35) Which is falsy?
// a) "0"   b) []   c) null   d) "false"

// 36) What does ["A","B"] instanceof Array return?
// a) true   b) false   c) "Array"   d) error

// 37) What does console.log("Hi" && "There") print?
// a) "Hi"   b) "There"   c) true   d) false

// 38) What does console.log(0 || "yes") print?
// a) 0   b) "yes"   c) true   d) undefined

// 39) Order of logical precedence is:
// a) || then && then !   b) ! then && then ||   c) && then || then !   d) ! then || then &&

// 40) Which is true about confirm()?
// a) Always returns a string
// b) Returns true/false based on OK/Cancel
// c) Returns undefined
// d) Throws without arguments

// 41) BigInt facts — which is correct?
// a) BigInt handles decimals
// b) BigInt(12.5) is valid
// c) BigInt is for integers only
// d) BigInt and Number always mix in arithmetic

// 42) What is typeof NaN?
// a) "number"   b) "NaN"   c) "undefined"   d) "object"

// 43) What does console.log(!"") print?
// a) true   b) false   c) ""   d) "!"

// 44) What does console.log("" || 0) print?
// a) ""   b) 0   c) false   d) undefined

// 45) Which expression evaluates to true?
// a) 10 === "10"   b) 10 == "10"   c) "10" * 2 === "20"   d) typeof null === "null"
[]