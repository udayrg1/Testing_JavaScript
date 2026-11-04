// Function accepts two numbers and returns swapped values
function swapNumbers(a: number, b: number): [number, number] {

    let temp: number = a;
    a = b;
    b = temp;

    return [a, b];
}

let result: [number, number] = swapNumbers(10, 20);

console.log("After swapping:");
console.log("a:", result[0]);
console.log("b:", result[1]);