//Control Flow statements in javascript control the flow of program like if else statement, switch statement, for loop, while loop, do while loop, break statement, continue statement etc.

//it generally tels in which side the program flows like if the condition is true then it will execute the block of code inside if statement otherwise it will execute the block of code inside else statement.

//if else statement
let age = 18;
if (age > 18){
    console.log("you are valid to vote");
}
else{
    log("you are not valid to vote");
}



// switch statement
let day = Number(prompt("Enter a number between 1 and 7:"));
switch(day){
    case 1 : console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input! Please enter a number between 1 and 7.");
}


//Another example of switch statement
let a = 2;
switch (a){
    case 1: console.log("hello");
    case 2: console.log("hi");
    case 3: console.log("welcome");
    default: console.log("invalid input");
}

// output:
//  "hi"
//  "welcome"
//  "invalid input"                bcoz of break statement is not used in the above code so it will execute all the cases after the case 2.



//Early return statement
//early return statement is used to exit from a function before it reaches the end of the function. It is used to avoid unnecessary code execution and to improve the readability of the code.

function grades(marks){
    if (marks>= 100 && marks <90) return "A" ;
    else if (marks >= 90 && marks < 70) return "B";
    else if (marks >= 70 && marks < 60) return "C"; 
    else if (marks >= 60 && marks < 50) return "D";
    else if (marks >= 50 && marks < 40) return "E";
    else if (marks >= 40 && marks < 0) return "F";
    else return "Invalid marks! Please enter a number between 0 and 100.";
}

console.log(grades(85)); // Output: "B"
console.log(grades(75));  // Output: "C"


//2. example of early return statement
function iseven(num){
    if (num % 2 == 0 ) return true;
    else return false;
}