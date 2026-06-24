// objects in javascriptaree collecction of key -value pairs. Each key is a string (or symbol) and each value can be any data type, including other objects. Objects are used to store and organize data in a structured way. They can be created using object literals, constructors, or the Object.create() method. For example:


// Creating an object using object literal
let person = {
    name: "John",
    age: 30,
    city: "New York"
};


// Creating an object using constructor
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

let person1 = new Person("Alice", 25, "Los Angeles");
let person2 = new Person("Bob", 35, "Chicago");


// Creating an object using Object.create() method
let personProto = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};


let person3 = Object.create(personProto);
person3.name = "Charlie";
person3.age = 28;
person3.city = "San Francisco";



// Accessing object properties
console.log(person.name); // Output: John



