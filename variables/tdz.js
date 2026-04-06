// TDZ is known as TEmporal Dead Zone.
// From line 1 to line above where variable is being initialized is  known as its temporal dead xone. In this zone we cannot access the variable because it is not yet initialized. If we try to access it, it will throw a reference error.


// let a;
// console.log(a);     // output -->> undefined because variable declared but not initialized or assigned any value
                
// console.log(b);     // output -->> ReferenceError: Cannot access 'b' before initialization because variable is in temporal dead zone
// let b = 10; 
// console.log(b);     // output -->> 10

// tdz of b is from line 1 to line 8 because it is declared at line 8 and before that it is in temporal dead zone. We cannot access it before line 8. After line 8 we can access it and it will give us the value assigned to it which is 10.