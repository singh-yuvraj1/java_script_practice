//for of loop  is applied to iterable objects like arrays, strings, maps, sets, etc. It allows us to iterate over the values of an iterable object without having to use an index.  
for (const element of array) {
    console.log(element);
}

//1. Print all elements of an array
let arr = [1, 2, 3, 4, 5];
for (const element of arr) {
    console.log(element);
}


//2. Find sum of all elements in an array
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (const element of arr) {
    sum += element;
}
console.log(sum);

//3. Find maximum element in an array
let arr = [1, 2, 3, 4, 5];
let max = arr[0];
for (const element of arr) {
    if (element > max) {
        max = element;
    }
}
console.log(max);

//4. Find minimum element in an array
let arr = [1, 2, 3, 4, 5];
let min = arr[0];
for (const element of arr) {
    if (element < min) {
        min = element;
    }
}
console.log(min);

//5. Count number of even and odd elements in an array
let arr = [1, 2, 3, 4, 5];
let evenCount = 0;
let oddCount = 0;
for (const element of arr) {
    if (element % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log(`Even count: ${evenCount}, Odd count: ${oddCount}`);
