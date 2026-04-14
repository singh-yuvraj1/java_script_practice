//bitwise operators are used to perform bitwise operations on binary numbers. They operate on the individual bits of the operands and return a new value based on the result of the operation. In JavaScript, there are several bitwise operators:

let a = 5; // In binary: 0101
let b = 3; // In binary: 0011       
// Bitwise AND (&) operator returns a new value where each bit is set to 1 if both corresponding bits of the operands are 1, otherwise it is set to 0.
console.log(a & b); // 1 (In binary: 0001)

// Bitwise OR (|) operator returns a new value where each bit is set to 1 if at least one of the corresponding bits of the operands is 1, otherwise it is set to 0.
console.log(a | b); // 7 (In binary: 0111)

// Bitwise XOR (^) operator returns a new value where each bit is set to 1 if only one of the corresponding bits of the operands is 1, otherwise it is set to 0.
console.log(a ^ b); // 6 (In binary: 0110)

// Bitwise NOT (~) operator returns a new value where each bit is inverted (0 becomes 1 and 1 becomes 0).
console.log(~a); // -6 (In binary: 1010, which is the two's complement representation of -6)

// Bitwise left shift (<<) operator shifts the bits of the first operand to the left by the number of positions specified by the second operand, filling the vacated bits with 0.
console.log(a << 1); // 10 (In binary: 1010)

// Bitwise right shift (>>) operator shifts the bits of the first operand to the right by the number of positions specified by the second operand, filling the vacated bits with the sign bit (the leftmost bit).
console.log(a >> 1); // 2 (In binary: 0010)

// Bitwise unsigned right shift (>>>) operator shifts the bits of the first operand to the right by the number of positions specified by the second operand, filling the vacated bits with 0.
console.log(a >>> 1); // 2 (In binary: 0010)
