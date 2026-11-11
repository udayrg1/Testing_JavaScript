//3. Write a JavaScript program to determine if a given number num is even or odd. 
// If it's even, check if it's greater than 5 and print appropriate messages. 

const num: number = 6;

if(num %2 == 0){
    if(num > 5){
        console.log(num, "is an even number and it is greater than 5");
    } else {
        console.log(num, "is an even number and it is lesser than 5");
    }   
} else {
    console.log(num, "is an odd number");
}