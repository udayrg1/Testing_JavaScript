function totalTime(): void {
    let seconds: number =  0;
    for(let distance: number = 36332; distance <= 999999999999999; distance++){
        seconds++;
    }
    console.log("Total seconds: " +seconds)
}

let a: number = 14;
let b: number = 30;

totalTime() /*first this func will execute and completes the entire for loop iterations, after completeing
all the iterations only 15th line will execute. This will cause delay in getting the expected output*/

console.log("The sum of A and B is: " +(a+b))

/*To avoid this waiting and to priotitze the other required statements first, we do use call back fucntions
for the please refer 2_callback.ts program*/