//1 Variables 
// ther eare thrre ways to declare a vaeribale in js

//1. var     [function scoped]  [redeclare and reassign]

//2. let     [block scoped]    [reassign but cant redclare again]

//3. const   [block scoped]         [cant reassign and cant redeclare]

//1. var is a way to creat evariables but in these days we dont use use var because of its issues like
    //1 var is function scoped , it doesnot obey block scope
    //2. it gets added to window object into browser 

        // 1.
        //  var a= 10;
        //  var a= 20;
        //  var a =50;
        // console.log(a)                      // output 50


        // 2. 

        // function normal(){
        //     var a = 10;                            
        //     var b = 5;                             
        //     console.log(a)                          //output 10
        //     console.log(b);                         //output 5
                            
        // }

        // console.log(a)                       //output error a is not defined because var is function scoped and it is not accessible outside the function normal
        // console.log(b);                      //output error b is not defined because var is function scoped and it is not accessible outside the function normal



// 2. let is also a way to create variables but it is block scoped and it doesnot get added to window object in browser
        //1
        //  let a = 10;
        //  a= 20;
        // //  let a =90;            //  error----cant redeclare
        //  console.log(a)                 // output 20  


        //2. 
        // {
        //     let a = 10;
        //     console.log(a);           // output 10  
            
        // }

        // console.log(a);            // error


//3. const is also a way to create variables but it is block scoped and it doesnot get added to window object in browser and it cant be reassigned and cant be redeclared
// const is created for values which will not in entire program like value of pi i.e. 3.14

        // //1
        // const a = 10           // cant reassign and cant redeclare
        // //a= 20                 error
        // //const a = 90;         error
        // console.log(a);        //output = 10
        


        //2. 
        // {
        //     const b = 50 ;
        //     console.log(b);         // output 50
            
        // }

        // console.log(b);             // error