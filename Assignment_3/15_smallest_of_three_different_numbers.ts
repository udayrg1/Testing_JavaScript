//Create a JavaScript program to find and print the smallest of three different numbers.

const a: number = 33, b: number = 11, c: number = 55

let smallest: number = a;

if(b < smallest) {
    smallest = b;
} 

if(c < smallest) {
    smallest = c;
}

console.log(smallest)