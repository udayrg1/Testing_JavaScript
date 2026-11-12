//4.	Implement a switch case to convert temperature units (e.g., Celsius to Fahrenheit or vice versa). 

const conversion: string = "CtoF";
const temperature: number = 30;

switch (conversion) {
    case "CtoF":
        console.log("Fahrenheit:", (temperature * 9 / 5) + 32);
        break;

    case "FtoC":
        console.log("Celsius:", (temperature - 32) * 5 / 9);
        break;

    default:
        console.log("Invalid conversion type");
}