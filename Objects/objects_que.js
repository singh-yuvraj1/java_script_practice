// //objects questions 
// Basic Object Questions
// Create an object person with name, age, and city.
// Access and print all properties of an object.
// Add a new property to an existing object.
// Delete a property from an object.
// Check if a property exists in an object.
// Count the number of properties in an object.
// Loop through all properties using for...in.
// Intermediate Object Questions
// Clone an object without modifying the original.
// Merge two objects into one.
// Convert an object into an array.
// Convert an array back into an object.
// Find the key with the highest value.
// Sort object properties by value.
// Freeze an object and test modifications.
// Compare two objects for equality.
// Object Methods Questions
// Create an object with a method greet().
// Use this keyword inside an object method.
// Create a calculator object with add, subtract, multiply methods.
// Create a student object that calculates percentage.
// Create a bank account object with deposit and withdraw methods.
// Advanced Object Questions
// Implement a deep copy function.
// Flatten a nested object.
// Find all nested keys in an object.
// Group an array of objects by a property.
// Remove duplicate objects from an array.
// Create your own Object.keys() function.
// Create your own Object.entries() function.
// Convert nested object to query string.
// Create a function that swaps keys and values.
// Implement object destructuring in different ways.
// Real-World Practice
// Student Management System object.
// Shopping Cart object.
// To-Do List object.
// Employee Record System.
// Library Management object.
// E-commerce Product object.
// Movie Database object.
// Expense Tracker object.
// Weather Data object.
// Social Media Profile object.
// Most Asked Interview Questions
// Difference between Object and Map.
// Difference between == and === for objects.
// Shallow Copy vs Deep Copy.
// Object.assign() vs Spread Operator (...).
// Object.keys(), Object.values(), Object.entries().
// this keyword in objects.
// Optional Chaining (?.).
// Destructuring Objects.


//----------------------------answers----------------------------

//1. Create an object person with name, age, and city.
let person = {
    name: "John",
    age: 30,
    city: "New York"
};  



//2. Access and print all properties of an object.
const person = {
  name: "Yuvraj",
  age: 21,
  city: "Punjab"
};


// Access individual properties
console.log(person.name);// Output: Yuvraj
console.log(person.age);// Output: 21
console.log(person.city);// Output: Punjab


// Access all properties using for...in loop
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}   

//other way to access and print all properties of an object
console.log(Object.keys(person).map(key => `${key}: ${person[key]}`));


//3. Add a new property to an existing object.
const person = {
  name: "Yuvraj",
  age: 21,
  city: "Punjab"
};

person.email = "yuvraj@example.com"; // Add new property
console.log(person.email); // Output: yuvraj@example.com