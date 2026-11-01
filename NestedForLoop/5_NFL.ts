/* print

111111111111111111
222222222222222222
333333333333333333
444444444444444444

*/

let result: string = "";

for(let row: number = 1; row <= 4; row++){
    for(let col: number = 1; col <= 14; col++){
        result += row
    }
    if(row < 4){
    result += "\n"
    }
}
console.log(result)