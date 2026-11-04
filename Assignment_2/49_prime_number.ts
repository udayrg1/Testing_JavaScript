function checkPrime(num: number): boolean {

    // Numbers less than or equal to 1 are not prime
    if (num <= 1) { return false; }

    // Check divisibility from 2 up to the square root of num
    for (let i: number = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    // If no divisor is found, the number is prime
    return true;
}

console.log(checkPrime(7));
console.log(checkPrime(10));