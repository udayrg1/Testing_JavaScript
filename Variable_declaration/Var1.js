var mybike = "RE 350 Stealth Black" // declaring and assigning a value
console.log(mybike)

mybike = "my bike is E20 efficient" // re-assigning
console.log(mybike)

var mybike = "Honda CB350 RS" // re-declaring the mybike variable
console.log(mybike)

{
    console.log(mybike) // accessing the outside variable inside the block

    var myage = 29 // declaring myage inside the block
    console.log(myage) // accessing the variable inside the block
}

console.log(myage) // accessing the variable declared inside the block from outside

/* Note: Data which is mentioned inside the block is always confodential as it may contain passwords, pins, account numbers 
and unique identity card details. Accessing such data leads to security breach and this the drawback with variable (var) in JS 
var is not block-scoped, so a variable declared inside a block can be accessed outside that block. This can cause unintended access 
or modification of variables and may lead to bugs.
*/