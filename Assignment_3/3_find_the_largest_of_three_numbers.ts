// 3.	Write a program to find the largest of three numbers. 

const a: number = 30, b: number = 88, c: number = 76;

let largest: number = a;

if (b > largest){ 
    largest = b; 
}
if (c > largest){ 
    largest = c; 
}

console.log(largest);

