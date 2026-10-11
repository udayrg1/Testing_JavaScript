const mycollege = "MIC College" //declaring and assigning value
console.log(mycollege) //MIC College

/*
mycollege = "VCube" //re-assigning
console.log(mycollege) - TypeError: Assignment to constant variable 

Note: Reassigning is strictly restricted for constants and it will throw TypeError: Assignment to constant variable.
*/

/*
const mycollege = "Amazon" //re-declaring and assigning the value
console.log(mycollege) - SyntaxError: Identifier 'mycollege' has already been declared

Note: Redeclaring is strictly restricted for constants and it will throw SyntaxError: Identifier 'mycollege' has already been declared
*/

{

    console.log(mycollege) //Accessing outside variable inside the block

    const myorg = "Apple" //Declaring and assigning value 
    console.log(myorg) // Accessing inside variable inside the block
}

/*
console.log(myorg) //Accessing inside varibale outside the block - ReferenceError: myorg is not defined

Note: Accessing inside variable outsode the block is strictly restriceted
*/