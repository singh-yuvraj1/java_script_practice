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

