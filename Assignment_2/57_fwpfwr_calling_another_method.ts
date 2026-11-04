// Method 1: Calculate square
function calculateSquare(num: number): number {
    return num * num;
}

// Method 2: Call the first method and return its result
function calculateResult(num: number): number {

    // Store the result returned by calculateSquare()
    let result: number = calculateSquare(num);

    return result;
}

// Call the second method
let output: number = calculateResult(5);

console.log("Square:", output);