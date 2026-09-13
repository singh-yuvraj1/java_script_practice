// A promise is a type of code that will go into a state out of [resolve or reject] depending on situation of program but will go in 1 at a time , but still we have to to write code for both states


// let promise = new Promise(function(res , rej){
//     let rn = Math.floor(Math.random() * 10)
//     if (rn > 50) res(rn)
//         else rej(rn)
// })

// promise.then(function(val){
//     console.log(val);
// }).catch(function(val){
//     console.log(val);
// })

//if res works then it will go inside "then"
// if reject works then it will go inside "catch"


///--------Same code use setTimeout---------

let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number= Math.floor(Math.random()*10)
        if (number>50) resolve(number)
        else reject(number)
    },5000);
})
pr.then(function(value){
    console.log(value);
}).catch(function (value) {
    console.log(value);
})