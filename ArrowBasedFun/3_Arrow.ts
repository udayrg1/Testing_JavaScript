function add(x: number, y: number): number 


{
    return x + y;                         // this will return 15, which is (10+5)
}

function multiply(value: number): number 

{
    return value * 3;                    // 15 * 3 = 45   --> same will be stored in j, now go down to console.log(j)
}

let i = add(10, 5);                      // that 15 will be stored in i, so now i = 15
let j = multiply(i);                     // j= multiply(15) ---> means value is 15, now go to top return value * 3

console.log(j);                          // it prints the j value 45