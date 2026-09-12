// javaScript is synchronus as well as asynchronus , 

//---Synchronus ----------- Code runs line by line 
//---Asynchronus -----------lines of Code runs when they are ready to code means firstly alll the code runs and settimeout type code runs after that even the delay is about 0seconds 

//1
function runafterSometime(){
    console.log("I will print immediately as code runs")
    setTimeout(() => {
        console.log("I will print after someRandom  secs"); 
    },
     Math.floor(Math.random()*20)*1000);

    console.log("I will print on second place before setTimeout");
    
}
runafterSometime()

//2
//Callback function means a function is receiving another function in parameter space

function runLater(fnc){
    setTimeout(fnc,3000)
}
runLater(()=>{
    console.log("hey");
    
})

//3

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Yuvraj", sayBye);