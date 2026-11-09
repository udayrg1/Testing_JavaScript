// Write a program to swap two numbers using a temporary variable.

let a: number = 25;
let b: number = 40;

console.log("Before swap value of a is: " + a +" and "+"value of b is: " + b);

let temp: number = a;
    a = b;
    b = temp;

console.log("After swap value of a is: " + a +" and "+"value of b is: " + b);
   