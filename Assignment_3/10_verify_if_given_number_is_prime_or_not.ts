// Develop a JavaScript program to verify if another given number is prime.

const num: number = 0;

let isPrime: boolean = true

if(num <= 1){
    console.log(num + " is not a prime number")
} else {
    
    
    for(let i: number = 2; i < num; i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }


    if(isPrime){
        console.log(num + " is a prime number")        
    } else {
        console.log(num + " is not a prime number") 
    }

}