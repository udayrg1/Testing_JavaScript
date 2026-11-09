//Write a JavaScript program to check if another given year is a leap year.

const year: number = 2024;

if(( year % 4 == 0 && year % 100 !== 0) || year % 400 == 0){
    console.log("Leap year")
} else {
    console.log("Normal year")
}