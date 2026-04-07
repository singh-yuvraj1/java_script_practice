//Primitve data types in js are those data types that can be copy directly and stored in a variable. They are immutable, meaning their value cannot be changed once assigned. The primitive data types in JavaScript include:

// examples 
// 1 Number
// 2. string
// 3. boolean
// 4 null
// 5 symbol
// 6. undefined
// 7. BigInt


//1. Number -- represents both integer and floating values.
// let num1 = 10;
// let num2 = 3.14; 

//2. string -- represents a sequence of characters enclosed in single quotes, double quotes, or backticks.
// let str1 = 'Hello';
// let str2 = "World";
// let str3 = `Hello, ${str2}!`;

//3. boolean -- represents the logical values true and flase.
// let isTrue = true;  
// let isFalse = false;

//4. null --- null represents that value is now intentially not assigned but will be assigned in future. type of null is object.
// let a = null;
// console.log(typeof a); // object

// //5. symbol -- represents a unique identifier that can be used as a property key in objects. 
// let sym1 = Symbol("id");
// let sym2 = Symbol("id");
// console.log(sym1 === sym2); // false because each symbol is unique  

//6 .undefined -- when we just declare variable and not assign any  value to it , then by defautlt  it gets value called undefined. type of undefined is undefined.
// let val;
// console.log(val); // undefined   

//7 BigInt -- js has precision limit for numbers which is 2^53 - 1. 
// if we want to store number larger than this limit then we to write n at the end of number to make it BigInt.
// if you want to add any number to it you also ahave to write n in that number at last also
// let bigIntNum = 9007199254740991n; // this is the largest safe integer in js
// let biggerNum = 9007199254740992n; // this is larger than the largest safe integer       