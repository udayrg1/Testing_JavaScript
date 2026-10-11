let mybike = 'Royal Enfield' // declaring and assigning a value
console.log(mybike) // Royal Enfield

mybike = "Honda CB350 RS" // reassigning the value
console.log(mybike) // Honda CB350 RS
 
/*let mybike = "Jawa 42 All Star" //redeclaring the value
console.log(mybike)  -- Syntax error: identifer 'mybike' has already been declared

Note: Re-declaring the value to the same identifer which is already declared is restricted while using "let" 
and it will throw "Syntax error: identifer 'mybike' has already been declared"

Note: Redeclaring a variable with the same identifier in the same scope is not allowed when using "let".
It will throw a SyntaxError: Identifier 'mybike' has already been declared.
*/

{
    console.log(mybike) // accessing the outside block variable inside the block

    let myarea = "Rampally" // declaring the variable
    console.log(myarea) // accessing the inside block variable inside the block
}

/*
console.log(myarea) //accessing the inside block variable outside the block 

ReferenceError: myarea is not defined

Note: Accessing inside block variable into outside the block is striclty restricted to avoid security breaches 
and it will throw "ReferenceError: myarea is not defined"
Note: A variable declared using "let" is block-scoped, so it cannot be accessed outside
the block where it was declared.
*/