//primitive data type example

// let a = 5;
// let b = a;
// b = b+ 5;
// console.log(a);           // 5 because a is primitive data type and when we assign a to b it creates a copy of value of a and assigns it to b. so when we change value of b it does not affect value of a because they are stored in different memory locations.
// console.log(b);           // 10 because we changed value of b but it does not affect value of a because they are stored in different memory locations.  
 

// reference data type example
// let arr1 = [1,2,3]
// let arr2 = arr1;
// arr2.push(5);
// console.log(arr1);          // [1,2,3,5] because arr1 and arr2 are reference data types and when we assign arr1 to arr2 it creates a reference to the same array in memory. so when we change value of arr2 it affects value of arr1 because they both point to the same array in memory.
// console.log(arr2);          // [1,2,3,5] because we changed value of arr2 and it affects value of arr1 because they both point to the same array in memory.


// let obj1 = {
//     name : "king",
//     age : 25
// }

// let obj2 = obj1;
// obj2.name= "queen" ;
// console.log(obj1);           // {name: "queen", age: 25} because obj1 and obj2 are reference data types and when we assign obj1 to obj2 it creates a reference to the same object in memory. so when we change value of obj2 it affects value of obj1 because they both point to the same object in memory.
// console.log(obj2);          // {name: "queen", age: 25} because obj1 and obj2 are reference data types and when we assign obj1 to obj2 it creates a reference to the same object in memory. so when we change value of obj2 it affects value of obj1 because they both point to the same object in memory.

