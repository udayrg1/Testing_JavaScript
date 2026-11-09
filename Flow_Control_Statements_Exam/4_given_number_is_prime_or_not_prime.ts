const num: number = 7;
let isPrime: boolean = true;

if (num <= 1) {
    isPrime = false;
} else {

    for (let i: number = 2; i < num; i++) {

        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${num} is a prime number`);
} else {
    console.log(`${num} is not a prime number`);
}