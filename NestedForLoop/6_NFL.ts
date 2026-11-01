/* print

1
22
333
4444
55555
666666

*/

let result: string = "";

for(let row: number = 1; row <= 6; row++){
    for(let col: number = 1; col <= row; col++){
        result += row
    }
    if (row < 6) {
    result += "\n"
    }
}
console.log(result)