let a: number = 12;
let b: number = 89;

try {
    let c: number[] = new Array(-9);
    console.log("Length of an Array" +c.length)
}

catch(exception){
    console.log("Please provide valid positive integers for array length")
    //here we are catching the exception and giving the fix
}

console.log("Sum of A and B is: " +(a+b))