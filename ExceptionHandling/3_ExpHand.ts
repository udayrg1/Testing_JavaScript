let a: number = 11;
let b: number = 38;


try {
    let c: number[] = new Array(3.9);
    console.log("The number of stored elements in c is: " + c.length)
} catch (prgrmerr) {
    console.log("Here the exception is due to: " +prgrmerr)
    //here directky we are printing the error
}
console.log("The sum of A and B is: " +(a+b))