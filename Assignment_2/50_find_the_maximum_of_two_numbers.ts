function findMaximum(a: number, b: number): number {

    // Compare both numbers
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let result: number = findMaximum(50, 90);

console.log("Maximum number:", result);