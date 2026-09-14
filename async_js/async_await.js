// since javascript is asynchronus so if there is code running line by line , but in between them we want a line of code , or a code to start run we will use async await 

//async --- by using we declare that we are using asynchronus js and then we can use await 
// if code has await before it then it will wait tfor that code to excute
// only when this await coden runs only then the next line of code runs.

// let pr = new Promise(function(res, rej){
//     setTimeout(()=>{
//        let nm = Math.floor(Math.random()*10)
//        if (nm > 5) res(`resolved number is ${nm}` )
//         else rej(`rejected number is ${nm}` )
//     },1000)
// })

// async function abc(){
//     try{
//         let val = await pr ;
//         console.log(val);   
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// abc()



//-----------

function loginUser(username , password){
    return new Promise((res, rej) => {
        setTimeout(()=>{   
            if (username === "Yuvraj" && password === 12340) res("Login Suucessful")
            else rej("Login failed")},2000)  
    })
} 
async function login(){
    try{
    let result = await loginUser("Yuvraj" , 12340) 
    console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
login()