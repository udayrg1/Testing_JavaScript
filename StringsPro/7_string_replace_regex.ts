let A : string = "Hi! all, how are you. Today we have a call @11:30 PM to publish our annual profits report"

let removeAlpha : string = A.replace(/[a-zA-Z]/g, "$")
let removeNums : string = A.replace(/[0-9]/g, "%")
let removeAlphanum : string = A.replace(/[0-9a-zA-Z]/g, "=")
let removeSpec : string = A.replace(/[^0-9a-zA-Z]/g, "")

console.log(removeAlpha)
console.log(removeNums)
console.log(removeAlphanum)
console.log(removeSpec)