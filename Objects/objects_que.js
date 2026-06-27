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


//4. Delete a property from an object.
delete person.email; // Delete the email property


//5. Check if a property exists in an object.
person.hasOwnProperty('email'); // Returns false since email was deleted


//6. Count the number of properties in an object.
const propertyCount = Object.keys(person).length;
console.log(propertyCount); // Output: 3 (name, age, city)


//7. Loop through all properties using for...in.
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}


//8. Clone an object without modifying the original.
const clonedPerson = Object.assign({}, person);
// or using spread operator
const clonedPerson = { ...person };


//9. Merge two objects into one.
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }


//10. Convert an object into an array.
const obj = { a: 1, b: 2, c: 3 };
const arr = Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]


//11. Convert an array back into an object.
const arr = [['a', 1], ['b', 2], ['c', 3]];
const obj = Object.fromEntries(arr); // { a: 1, b: 2, c: 3 }


//12. Find the key with the highest value.
const obj = { a: 1, b: 2, c: 3 };
const maxKey = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
console.log(maxKey); // Output: c



//13. Sort object properties by value.
const obj = { a: 3, b: 1, c: 2 };
const sortedEntries = Object.entries(obj).sort(([, valueA], [, valueB]) => valueA - valueB);
const sortedObj = Object.fromEntries(sortedEntries);
console.log(sortedObj); // Output: { b: 1, c: 2, a: 3 }


//14. Freeze an object and test modifications.
const obj = { a: 1, b: 2 };
Object.freeze(obj);
obj.a = 3;
// obj.a will still be 1 because the object is frozen

console.log(obj.a); // Output: 1


//15. Compare two objects for equality.
function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    } 
    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
    }
  
  // Example usage:
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 2 };
  const obj3 = { a: 1, b: 3 };

  console.log(areObjectsEqual(obj1, obj2)); // Output: true


  //16. Create an object with a method greet().
const person = {
    name: "Yuvraj",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    } }
// Example usage:
person.greet(); // Output: Hello, my name is Yuvraj 