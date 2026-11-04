function convertToFahrenheit(celsius: number): number {

    // Apply the Celsius-to-Fahrenheit formula
    let fahrenheit: number = (celsius * 9 / 5) + 32;

    return fahrenheit;
}

let result: number = convertToFahrenheit(30);

console.log("Fahrenheit:", result);