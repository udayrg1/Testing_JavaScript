//11.	Write a JavaScript program that recommends clothing based on the weather temperature and whether it's raining. 
// Ask the user for the temperature (in degrees Celsius) and whether it's raining. 
// Provide clothing recommendations accordingly.

const temperature: number = 18; // Celsius
const isRaining: boolean = true;

if (temperature < 10) {
    if (isRaining) {
        console.log("Wear a heavy jacket, carry a raincoat and umbrella");
    } else {
        console.log("Wear a heavy jacket and warm clothes");
    }
} else if (temperature <= 25) {
    if (isRaining) {
        console.log("Wear a light jacket and carry an umbrella");
    } else {
        console.log("T-shirt and jeans are fine");
    }
} else {
    if (isRaining) {
        console.log("Wear light cotton clothes and carry an umbrella");
    } else {
        console.log("Shorts, T-shirt and sunglasses");
    }
}