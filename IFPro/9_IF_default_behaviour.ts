let age: number = 30; // Try negative values like -45 and -70 as well.

if (age) 
/* We haven't provided an explicit comparison condition. TypeScript evaluates the value of age using Boolean conversion.
Any value other than zero are true.*/
{
    console.log("Hello TypeScript");
}


// try age value with 0, we don't get any output because IF default is false for 0