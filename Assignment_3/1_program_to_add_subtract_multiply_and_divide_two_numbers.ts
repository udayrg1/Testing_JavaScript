// 1.	Write a program to add, subtract, multiply, and divide two numbers. 

const a: number = 68;
const b: number = 5;

console.log("Addition: " + (a+b))
console.log("Subtraction: " + (a-b))
console.log("Multiplication: " + (a*b))
if(b !== 0){
    console.log("Division: " +(a/b))
} else {
    console.log("Cannot divide by zero");
}