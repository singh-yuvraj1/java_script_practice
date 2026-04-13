//Logical operators are used to perform logical operations on operands and return a boolean value (true or false) based on the result of the operation. In JavaScript, there are three main logical operators: AND (&&), OR (||), and NOT (!).

let x = true;
let y = false;  

// Logical AND (&&) operator returns true if both operands are true, otherwise it returns false.
console.log(x && y); // false (both operands are not true)

// Logical OR (||) operator returns true if at least one of the operands is true, otherwise it returns false.
console.log(x ||y); // true (at least one operand is true)

// Logical NOT (!) operator returns true if the operand is false, and returns false if the operand is true.

console.log(!x); // false (x is true, so !x is false)
console.log(!y); // true (y is false, so !y is true)

// Logical operators can also be used with non-boolean values. In such cases, JavaScript uses "truthy" and "falsy" values to determine the result of the operation.
console.log(0 && x); // 0 (0 is falsy, so the result is 0)
console.log(1 || y); // 1 (1 is truthy, so the result is 1)
console.log(!0); // true (0 is falsy, so !0 is true)

