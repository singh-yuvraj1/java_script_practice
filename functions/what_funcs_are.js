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