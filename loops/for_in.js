//for in loop is used to loop through the properties of an object. It allows us to iterate over the keys of an object and access their corresponding values.  
for (const key in object) {
    console.log(key, object[key]);
}   

//1. Print all properties of an object
let obj = { name: "John", age: 30, city: "New York" };
for (const key in obj) {
    console.log(key, obj[key]);
}

//2. Find the sum of all values in an object
let obj = { a: 1, b: 2, c: 3 };
let sum = 0;
for (const key in obj) {
    sum += obj[key];
}
console.log(sum);

//3. Find the maximum value in an object
let obj = { a: 1, b: 2, c: 3 };
let max = obj[Object.keys(obj)[0]];
for (const key in obj) {
    if (obj[key] > max) {
        max = obj[key];
    }
}
console.log(max);

//4. Find the minimum value in an object
let obj = { a: 1, b: 2, c: 3 };
let min = obj[Object.keys(obj)[0]];
for (const key in obj) {
    if (obj[key] < min) {
        min = obj[key];
    }
}
console.log(min);

//5. Count the number of properties in an object
let obj = { name: "John", age: 30, city: "New York" };
let count = 0;
for (const key in obj) {
    count++;
}
console.log(count);

