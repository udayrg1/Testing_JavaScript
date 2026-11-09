// Calculate the sum of first 50 natural numbers using a for loop?
let sum_of_natural_numbers: number = 0

for(let num: number = 1; num <= 50; num++){
    sum_of_natural_numbers += num;
}
console.log(sum_of_natural_numbers)

//alternate

// Calculate the sum of first 50 natural numbers using a formula

const n: number = 50;

// Apply the formula: Sum = n * (n + 1) / 2
const sum: number = (n * (n + 1)) / 2;

console.log("Sum of first 50 natural numbers:", sum);