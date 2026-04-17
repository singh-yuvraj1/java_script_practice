// 🔹 BASIC (Level 1)
// Print numbers from 1 to 10
// Print numbers from 10 to 1
// Print all even numbers from 1 to 50
// Print all odd numbers from 1 to 50
// Find sum of numbers from 1 to N
// Print multiplication table of a number (user input)
// Count numbers from 1 to N that are divisible by 3


// 🔹 LOGIC BUILDING (Level 2)
// Find factorial of a number
// Reverse a number
// Count number of digits in a number
// Find sum of digits
// Check if number is palindrome
// Find product of digits
// Remove last digit repeatedly and print each step


// 🔹 INTERMEDIATE (Level 3)
// Print first N Fibonacci numbers
// Check if a number is prime
// Print all prime numbers from 1 to N
// Find GCD of two numbers
// Find LCM of two numbers
// Check if number is Armstrong number


// 🔹 LOOP CONTROL (Level 4)
// Print numbers from 1–100 but:
// Skip multiples of 5
// Stop at 50
// Find first number divisible by both 3 and 7 between 1–100
// Print numbers until sum exceeds 100


// 🔹 BASIC (Level 1)
//1.Print numbers from 1 to 10
// for (let i=1; i<11; i++){
//     console.log(i);
// }

//2.Print numbers from 10 to 1.
// for (let i = 10 ; i>=1; i--){
//     console.log(i);
// }

//3.Print all even numbers from 1 to 50
// for (let i= 1; i<51; i++){
//     if (i % 2 == 0){
//         console.log(i);
//     }
// }


// //4.Print all odd numbers from 1 to 50
// for (let i= 1; i<51; i++){
//     if (i % 2 != 0){
//         console.log(i);
//     }
// }


//5. Find sum of numbers from 1 to n
// let n = Number(prompt("Enter value of n "))
// let sum = 0 ;
// for (let i = 1 ; i< n+ 1; i++){
//     sum = sum + i
// }
// console.log(sum);

//6.Print multiplication table of a number (user input)
// let num = Number(prompt("Enter the number for which you want to print table"))
// for (let i = 1 ; i< 11; i++ ){
//      console.log(`${num} * ${i} = ${num * i} `);
// }

//7.  Count numbers from 1 to N that are divisible by 3
let num = Number(prompt("Enter number "));
let count = 0;
for (let i = 1 ; i < num+1 ; i++){
     if(i % 3 == 0 ){
          count += 1
     } 
}
console.log(count);   