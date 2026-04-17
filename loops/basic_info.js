// loops are used to repeat a block of code until a specified condition meet.
//for example you have to print a name or any message 100 times or more than it then rather of printing it 100 times you can use loop to print it 100 times or more than it.

// loops types .
//1 for loop
//2 while loop
//3 do while loop

//for loop is used when you know how many times you want to repeat a block of code.
// it consist of three parts
// 1. initialization
// 2. condition
// 3. increment/decrement


// while loop is used when you don't know how many times you want to repeat a block of code.
// it consist of two parts
// 1. condition
// 2. increment/decrement


// do while loop is used when you want to execute a block of code at least once and then repeat it until a specified condition meet.
// it consist of two parts
// 1. block of code
// 2. condition
// in do while loop the block of code will be executed at least once even if the condition is false.


//------------------------------Major differnece in for and while loop is that you can use for loop when
//  you know how many times you want to repeat a block of code and you can use while loop when you don't know how many times you want to repeat a block of code.------------------------------ 

// -----------------------------for loop------------------------------
//1.
for (let i = 0; i < 5; i++){
    console.log(i);
}

//output 
// 0
// 1
// 2
// 3
// 4

//2.
for (let i= 0; i<10; i++){
    console.log("Hello Duniya")
}

///output
// Hello Duniya will be printed 10 times


// -----------------------------while loop------------------------------
//1.
let i = 0;
while (i < 5){
    console.log(i);
    i++;
}
//output
// 0
// 1
// 2
// 3
// 4



//-------------------------------do while loop------------------------------ 
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);
//output
// 0
// 1
// 2
// 3
// 4        


//2.
let k= 15;
do{
    console.log(k);
    k++;
}
while(k<10);
//output
// 15