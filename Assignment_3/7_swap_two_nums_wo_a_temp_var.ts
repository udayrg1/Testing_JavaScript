// Write a program to swap two numbers without using a temporary variable.

let a: number = 25;
let b: number = 40;

console.log("Before swap value of a is: " + a +" and "+"value of b is: " + b);

[a, b] = [b, a];

console.log("After swap value of a is: " + a +" and "+"value of b is: " + b);
   
console.log("****************Alternate approach****************")

console.log("Before swap: a = " + a + " and b = " + b);

// Swap without using a temporary variable
a = a + b; // a = 25 + 40 = 65
b = a - b; // b = 65 - 40 = 25
a = a - b; // a = 65 - 25 = 40

console.log("After swap: a = " + a + " and b = " + b);