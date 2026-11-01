/* print
10987654321
987654321
87654321
7654321
654321
54321
4321
321
21
1
*/

let result: string = "";

for(let row: number = 1; row <= 10; row++){
    for(let col: number = 11 - row; col >= 1; col--){
        result += col
    }
    result += "\n"
}
console.log(result)