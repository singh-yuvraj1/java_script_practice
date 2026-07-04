// let abc = document.getElementById("abc")
// abc.innerText = "i am starlight"
// console.dir(abc)


// let ab = document.getElementsByClassName(".ab")
// ab.textContent= "William Butcher"
// console.dir(ab)




// let bb = document.querySelector(".ab")
// bb.textContent = " soldier boy"
// console.dir(bb)


// let hh = document.querySelector("h1")
// hh.textContent = " soldier boy"
// console.dir(hh)



//--------------------- we will first learn how to select html elements.

//There are 4 methods to select html elements in javascript.
//1. getElementById
//2. getElementsByClassName
//3. querySelector
//4. querySelectorAll


//1. getElementById

let abc = document.getElementById("abc")
console.dir(abc)      // this will give all info related to variable abc in console , you can check every detail and can manipulate accordingly.

abc.outerText = "i am a-train , I ran very fast"    // it will change the older id (text) and will display new string.


//2. getElementsByClassName

let ab = document.getElementsByClassName("ab")
console.dir(ab)
ab[0].innerHTML = "not Butcher , I  am BIllY BUTCHER"

//3. querySelector

let bb = document.querySelector(".ab")
bb.textContent = " soldier boy"
console.dir(bb)


//4. querySelectorAll

let hh = document.querySelectorAll("h1")
console.dir(hh)
hh[0].textContent = " soldier boy"