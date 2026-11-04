function calculateArea(length: number, width: number): number {

    // Calculate the area
    let area: number = length * width;

    return area;
}

let result: number = calculateArea(10, 5);

console.log("Area:", result);