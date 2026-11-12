//7.	Write a switch case to determine the type of a given year (common year, leap year, Gregorian leap year). 

const year: number = 2024;

switch (true) {
    case (year % 400 === 0):
        console.log("Gregorian leap year");
        break;

    case (year % 100 === 0):
        console.log("Common year");
        break;

    case (year % 4 === 0):
        console.log("Leap year");
        break;

    default:
        console.log("Common year");
}