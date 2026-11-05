function totalTime(): void {
    let seconds: number = 0;
    for(let distance: number = 36332; distance <= 9999999999; distance++){
        seconds++;
    }
    console.log("Total seconds: " +seconds)
}

let a: number = 14;
let b: number = 30;

setTimeout(() => totalTime(), 1000)  //--> callback function
console.log("The sum of A and B is: " +(a+b))