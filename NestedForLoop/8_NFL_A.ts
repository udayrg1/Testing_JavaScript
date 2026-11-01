/* print
10987654321
1098765432
109876543
10987654
1098765
109876
10987
1098
109
10
*/

let result: string = "";

for(let row: number = 1; row <= 10; row++){
    for(let col: number = 10; col >= row; col--){
        result += col
    }
    result += "\n"
}
console.log(result)