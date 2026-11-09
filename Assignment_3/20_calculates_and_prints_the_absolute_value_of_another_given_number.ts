//Implement a JavaScript program that calculates and prints the absolute value of another given number.

const num: number = -50;

let absoluteValue: number;

if (num < 0) {
    absoluteValue = -num;
} else if (num > 0) {
    absoluteValue = num;
} else {
    absoluteValue = 0;
}

console.log("Absolute value is: ", absoluteValue);