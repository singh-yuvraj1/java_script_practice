//Ternary operators are also known as conditional operators. It is the only operator that takes three operands. It is used to evaluate a condition and return a value based on the condition.
let age = 18;
// The syntax of the ternary operator is: condition ? value_if_true : value_if_false
let result = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(result); // Output: "You are an adult."
// In this example, the condition is age >= 18. If the condition is true, the value "You are an adult." is returned and assigned to the variable result. If the condition is false, the value "You are a minor." is returned and assigned to the variable result. Since age is 18, the condition is true, so the output will be "You are an adult."


//more examples
//1
let num = 10;
let parity = num % 2 === 0 ? "Even" : "Odd";
console.log(parity); // Output: "Even"
// In this example, the condition is num % 2 === 0. If the condition is true, the value "Even" is returned and assigned to the variable parity. If the condition is false, the value "Odd" is returned and assigned to the variable parity. Since num is 10, which is even, the output will be "Even".

//2
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(grade); // Output: "B"


//3.
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log(discount); // Output: 0.1
// In this example, the condition is isMember. If the condition is true, the value 0.1 is returned and assigned to the variable discount. If the condition is false, the value 0 is returned and assigned to the variable discount. Since isMember is true, the output will be 0.1.