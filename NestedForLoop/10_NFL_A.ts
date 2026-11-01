/* print
101010101
010101010
101010101
010101010
101010101
*/

let result: string = "";

for(let row: number = 1; row <= 5; row++){
    for(let col: number = 1; col <= 9; col++)
        if((row + col)%2 == 0) {
        result += "1"
    } else  {
        result += "0"
    }
    result += "\n"
}
console.log(result)