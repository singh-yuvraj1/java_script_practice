//Comparison operators are used to compare two values and return a boolean value (true or false) based on the comparison. Here are some common comparison operators in JavaScript:

let a = 5;
let b = 10;
console.log(a == b); // false (equal to)
console.log(a != b);    // true (not equal to)
console.log(a > b);     // false (greater than)
console.log(a < b);     // true (less than)
console.log(a >= b);    // false (greater than or equal to)
console.log(a <= b);    // true (less than or equal to) 
//Strict equality operator (===) checks for both value and type
let c = '5';
console.log(a == c); // true (equal to, but different types)
console.log(a === c); // false (strictly equal to, same value and type)
//Strict inequality operator (!==) checks for both value and type
console.log(a != c); // false (not equal to, but different types)
console.log(a !== c); // true (strictly not equal to, different value or type)  
