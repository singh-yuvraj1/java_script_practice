//hoisting occurs in variables and functions. It is a default behavior of JavaScript where all the variable and function declarations are moved to the top of their scope before code execution. This means that you can use variables and functions before they are declared in the code.



// console.log(a);       // output undefined because variable a is hoisted but not initialized. It is declared at line 9 but not assigned any value, so it gives us undefined when we try to access it before initialization.
// let a = 10;

console.log(b);
let b = 10;   
//    (this will become like let b; and the line number 1 will become like let b = undefined; because of hoisting. So when we try to access b before initialization, it will give us undefined instead of reference error because it is declared but not initialized yet.)

//similary happenn in var and const as well. But in case of var, it will give us undefined when we try to access it before initialization because var is hoisted and initialized with undefined. In case of const, it will give us reference error when we try to access it before initialization because const is hoisted but not initialized. It is in temporal dead zone until it is initialized. So we cannot access it before initialization.