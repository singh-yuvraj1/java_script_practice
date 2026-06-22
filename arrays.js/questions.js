// Basic Questions
// What is an array in JavaScript?
// How do you create an array?
// What is the difference between [] and new Array()?
// How are array indexes assigned?
// What does the length property do?
// Can an array contain different data types?
// Array Methods
// What is the difference between push() and pop()?
// What is the difference between shift() and unshift()?
// What is the difference between slice() and splice()?
// What does map() do?
// What does filter() do?
// What does reduce() do?
// What is the difference between forEach() and map()?
// What is the difference between find() and filter()?
// What is the purpose of includes()?
// Intermediate Questions
// How do you merge two arrays?
// How do you remove duplicate values from an array?
// What is the spread operator (...) and how is it used with arrays?
// What is array destructuring?
// How do you check if a variable is an array?
// What is the difference between shallow copy and deep copy of an array?
// How do you sort an array of numbers?
// What does the flat() method do?



// 1.  What is an array in JavaScript?
// An array in js is a  linear type of data structure used to store multiple values in a single variable. It is mutable and can hold different data types. Arrays are zero indexed, which means the first element is at index 0, the second element is at index 1, and so on.


//2. How do you create an array?
// You can create an array using square brackets [] or using the Array constructor.

// Using square brackets
let arr1 = [1, 2, 3, 4, 5];


// Using Array constructor
let arr2 = new Array(1, 2, 3, 4, 5);


//3. What is the difference between [] and new Array()?
// The main difference is that when you use [] to create an array, you can directly specify the elements of the array. However, when you use new Array(), you can either specify the elements or just the length of the array. If you pass a single number to new Array(), it will create an array with that length but without any elements. For example:
let arr3 = new Array(5); // creates an array of length 5 with no elements
console.log(arr3); // [ <5 empty items> ]


//4 . How are array indexes assigned?
// Array indexes are assigned starting from 0. The first element of the array is at index 0, the second element is at index 1, and so on. You can access elements of the array using their index. For example:
let arr4 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr4[0]);
// Output: 'a'
console.log(arr4[2]);
// Output: 'c'


//5. What does the length property do?
// The length property of an array returns the number of elements in the array. It is a read-only property that can be used to determine the size of the array. For example:
let arr5 = [1, 2, 3, 4, 5];
console.log(arr5.length);
// Output: 5

//6. Can an array contain different data types?
// Yes, an array in JavaScript can contain different data types. You can have numbers, strings, booleans, objects, and even other arrays as elements of an array. For example:
let arr6 = [1, 'hello', true, { name: 'Alice' }, [2, 3]];
console.log(arr6);
// Output: [1, 'hello', true, { name: 'Alice' }, [2, 3]]


//7. What is the difference between push() and pop()?
// The push() method is used to add one or more elements to the end of an array and returns the new length of the array. The pop() method is used to remove the last element from an array and returns that element. For example:
let arr7 = [1, 2, 3];
arr7.push(4);
console.log(arr7);
// Output: [1, 2, 3, 4]
let lastElement = arr7.pop();
console.log(lastElement);
// Output: 4
console.log(arr7);
// Output: [1, 2, 3]


//8. What is the difference between shift() and unshift()?
// The shift() method is used to remove the first element from an array and returns that element. The unshift() method is used to add one or more elements to the beginning of an array and returns the new length of the array. For example:
let arr8 = [1, 2, 3];
arr8.unshift(0);
console.log(arr8);
// Output: [0, 1, 2, 3]
let firstElement = arr8.shift();
console.log(firstElement);
// Output: 0
console.log(arr8);
// Output: [1, 2, 3]


//9. What is the difference between slice() and splice()?
// The slice() method is used to create a new array that contains a portion of the original array. It takes two arguments: the start index and the end index (exclusive). The splice() method is used to add or remove elements from an array. It takes three arguments: the start index, the number of elements to remove, and the elements to add (optional). For example:
let arr9 = [1, 2, 3, 4, 5];
let slicedArr = arr9.slice(1, 4);
console.log(slicedArr);
// Output: [2, 3, 4]
arr9.splice(2, 1, 10);
console.log(arr9);
// Output: [1, 2, 10, 4, 5]


