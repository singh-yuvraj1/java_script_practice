// functions are reusable block of codes. we can use it as many times how many we want.
// Function never run until we call it.
// In javascipt functions can be created in three ways.
//1. Function declaration/statement 
//2. Function expression 
//3. Fat arrow function 

//1. Function declaration 
//a
function greet(){
    console.log("Helolololo");
}
greet()    //function call  , helololo will no print until we write this line 


//b. 

function light_on(){
    console.log("Light is turned on");
}
light_on()


//2. Function expression
//a.
let greet1 = function(){
    console.log("hlo sir, this is function expression way of writing function");
}
greet1()


//b.
let light_on1 =function(){
    console.log("Light is turned on");
}
light_on()



//3. arrow function 
let greet2 = ()=>{
    console.log("this is arrow function way to greet");
}

greet2()


//function with parameters and arguments


//Parameters are variable listed in function definition. They are placeholders for receving actual value when function is called.


//Argumets are actual value passed to function when called.


// we can add default value to parameters also.  

//1. Function declaration 
//a
function greet(name){
    console.log(`Hello ${name}`);
}
greet("Yuvraj")  


//b. 
function add(a,b) {
    return a+ b;
}
console.log(add(5,4))


//2. Function expression
//a.
let greett = function(name){
    console.log(`hlo mr. ${name} this is function expression way of writing function`);
}
greett("Singh")



//b.
let addd =function(a,b) {
    return a+ b;
}
console.log(addd(5,4))


//3. arrow function 
//a.
let greettt = (name)=>{
    console.log(`this is arrow function way to greet ${name}`);
}

greettt("Gentleman")



//b.
let multiply = (a,b)=> {
    return a* b;
}
console.log(multiply(5,4))


//if there is only one paramter so then we dont need to add these paranthesis  ()
let multiplly =  x =>{
    return x ** 2
}
console.log(multiplly(5));

//-------------------------------------------Default Parameters----------------------------------
//you can also give default value in  paramterts so that if user forgot to pass arguments then it will use those values

// supppose you wrote a function and the user forgot to pass the arguments then it will give undefined so to avoid that we can give default value to parameters.

// Ex ---

function greet(name = "Yuvraj"){
    console.log(`Hello ${name}`);
}
greet() //Hello Yuvraj



//------------------------------Rest operator------------------------------------   

// SUppose you want to pass multiple arguments to a fucntion but you dont know how many arguments user will pass then we can use rest operator. It is denoted by three dots ... before the parameter name. It will take all the arguments passed to function and store them in an array.


//EX

function sum(...numbers){
    let total = 0;
    for(let num of numbers){
        total += num;
    }   
    return total;
}
console.log(sum(1, 2, 3, 4, 5));

//output: 15


//-----------you can also give more parameters along with rest operator but rest operator should be the last parameter in the function definition.-----------------
function greet(greeting, ...names) {
    for (let name of names) {
        console.log(`${greeting} ${name}`);
    }
}
greet("Hello", "Alice", "Bob", "Charlie");
//output:
//Hello Alice
//Hello Bob
//Hello Charlie



//------------------------------Higehr Order Function------------------------------------

// A higher order function is a function that takes another function as an argument or returns a function as a result. In JavaScript, functions are first-class citizens, which means they can be treated like any other value. This allows us to create higher-order functions that can manipulate and work with other functions.

function greet(name) {
    return function(message) {
        console.log(`${message}, ${name}!`);
    };  
}
greet("Alice")("Hello"); // Output: Hello, Alice!



// or we can store the returned function in a variable and call it later:
const greetAlice = greet("Alice");
greetAlice("Hi"); // Output: Hi, Alice!



// ANother example in which we will pass function as an argument to another function
function unknown(newfunc){
    
}

unknown(basefunc);{
    console.log("this is function passed as an argument to another function");
}  

//output: this is function passed as an argument to another function



//------------------------------hoisting------------------------------------

//hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use functions and variables before they are declared in the code. However, it's important to note that only function declarations are hoisted, while function expressions and variables declared with let and const are not hoisted in the same way.

// funciion declararation and function statements are hoisted, which means you can call them before they are defined in the code. For example:


// example of function declaration hoisting

hoistExample(); // This will work because the function is hoisted

function hoistExample() {
    console.log("This function is hoisted!");
}


//ex 2

hoistExample2(); // This will also work because the function is hoisted

function hoistExample2() {
    console.log("This function is hoisted too!");
}   