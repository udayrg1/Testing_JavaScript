function calculateSum(...numbers: number[]): number {

    let sum: number = 0;

    // Iterate through all received numbers
    for (let i: number = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    return sum;
}

// Pass different numbers of arguments
console.log(calculateSum(10, 20));
console.log(calculateSum(10, 20, 30));
console.log(calculateSum(10, 20, 30, 40, 50));