//arrays are linear type of data sstructure in js used to store multiple values in a single variable
//arrays are mutable and can hold different data types
//arrays are zero indexed

//creating an array
let arr = [1, 2, 3, 4, 5];
//accessing elements in an array
console.log(arr[0]); //1
console.log(arr[2]); //3    

//modifying elements in an array
arr[1] = 10;
console.log(arr); //[1, 10, 3, 4, 5]

//array methods
//push - adds an element to the end of the array
arr.push(6);
console.log(arr); //[1, 10, 3, 4, 5, 6]


//pop - removes the last element of the array
arr.pop();
console.log(arr); //[1, 10, 3, 4, 5]


//shift - removes the first element of the array
arr.shift();
console.log(arr); //[10, 3, 4, 5]


//unshift - adds an element to the beginning of the array
arr.unshift(0);
console.log(arr); //[0, 10, 3, 4, 5]


//length - returns the number of elements in the array
console.log(arr.length); //5


//indexOf - returns the index of the first occurrence of an element in the array
console.log(arr.indexOf(3)); //2

//includes - returns true if the array contains a specified element
console.log(arr.includes(4)); //true



