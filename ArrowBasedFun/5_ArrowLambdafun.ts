//Normal Function

function sum(a:number, b:number) : number

{
    return a+b;
}

console.log(sum(23,37))


//Now we will write the above program using Arrow(lambda) function

let h = (i:number, j:number) : number => (i-j)
console.log(h(27, 9));