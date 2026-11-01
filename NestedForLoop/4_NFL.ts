/* print

12345678
12345678
12345678
*/

let result: string = "";

for(let row: number = 1; row <= 3; row++){
    for(let col: number = 1; col <= 8; col++){
        result += col
    }

    if (row < 3) {
    result += "\n"
    }
}
console.log(result)