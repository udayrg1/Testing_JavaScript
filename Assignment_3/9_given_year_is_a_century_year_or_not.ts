// Implement a JavaScript program to ascertain if another given year is a century year (ending in '00').

const year: number = 1999;

if(year % 1000 == 0){
    console.log(year + " is a Centuary year")
} else {
    console.log(year + " is not a Centuary year")
}