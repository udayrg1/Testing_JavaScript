function adding(i: number, j: number): number 

{   
    let k : number = i+j;
    return k;
}

let l: number = adding(30, 39); //returned k value will store in l, so now the l value is 69

let finalTotal: number = l + 100;   // the same l = 69 is used here 69+100 = 169 and stores in finalTotal

console.log(finalTotal); //this is to print