/* Write a JavaScript program to print the following star pattern:
 * 
 * * 
 * * * 
 * * * * 
 * * * * * 
*/

let star: string = "";

for(let i: number = 1; i <= 5; i++){
    for(let j: number = 1; j <= i; j++){
        star += "*"
    }
    if(i<5){
        star += "\n"
    }
}
console.log(star);