let name: string = "     Uday Kumar    "

console.log(name); //"     Uday Kumar    "
console.log(name.trim()); //"Uday Kumar"
console.log(name.trimEnd());//"     Uday Kumar"
console.log(name.trimStart());//"Uday Kumar    "

console.log(name.length);
console.log(name.trim().length);
console.log(name.trimEnd().length);
console.log(name.trimStart().length);