let A : string = "Hi! all, how are you. Today we have a call @11:30 PM to publish our annual profits report"

let removeAlpha : string = A.replace(/[a-zA-Z]/g, "$")
let removeAlpha1 : string = A.replace(/[a-zA-Z]/g, "")
let removeAlpha2 : string = A.replace(/[a-zA-Z]/g, "_")

console.log(removeAlpha)
console.log(removeAlpha1)
console.log(removeAlpha2)