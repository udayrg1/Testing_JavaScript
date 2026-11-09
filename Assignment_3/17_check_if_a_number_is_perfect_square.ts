//Develop a TypeScript program to check if another number is a perfect square.

const num: number = 74;

const squareRoot: number = Math.sqrt(num);

if(num >= 0 && Number.isInteger(squareRoot)){
    console.log(num + ' is a perfect square')
} else {
    console.log(num + ' is not a perfect square')
}