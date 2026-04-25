//----------------------------------------------Questions----------------------------------------------

function add() {
    let num1 = parseInt(prompt("Enter the first number:"));
    let num2 = parseInt(prompt("Enter the second number:"));
    let sum = num1 + num2;
    alert("The sum of " + num1 + " and " + num2 + " is: " + sum);
}

add();


//question 2
function calculateArea() {
    let radius = parseFloat(prompt("Enter the radius of the circle:"));
    let area = Math.PI * Math.pow(radius, 2);
    alert("The area of the circle with radius " + radius + " is: " + area.toFixed(2));
}   
calculateArea();