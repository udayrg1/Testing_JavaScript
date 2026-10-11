let ranks: number[] = [85,96,43,75,82,39,66,53,15,22,9,6]
console.log(ranks)

/*let ranks_asc: number[] = ranks.sort()
console.log(ranks)*/

let ranks_asc: number[] = [...ranks].sort((m,n) => m-n)
let ranks_dsc: number[] = [...ranks].sort((m,n) => n-m)

console.log(ranks_asc)
console.log(ranks_dsc)
