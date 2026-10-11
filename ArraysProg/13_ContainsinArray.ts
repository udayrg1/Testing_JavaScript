let states : string[] = ["Andhra","Telangana","Tamilanadu","Kerala","Karnataka"]
console.log(states)

console.log(states.includes("Goa"))       //-->false
console.log(states.includes("Andhra"))    //-->true
console.log(states.includes("andhra"))    //-->false
console.log(states.includes("Tamilanadu"))//-->true