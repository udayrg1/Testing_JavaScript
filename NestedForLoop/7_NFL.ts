/* print

1
12
123
1234
12345
123456
1234567
12345678
123456789

*/

let result: string = "";

for(let row: number = 1; row <= 9; row++){
    for(let col: number = 1; col <= row; col++){
        result += col
    }
    if (row < 9) {
    result += "\n"
    }
}
console.log(result)