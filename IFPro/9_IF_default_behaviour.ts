let age: number = 30; // Try negative values like -45 and -70 as well.

if (age) 
/* We haven't provided an explicit comparison condition. TypeScript evaluates the value of age using Boolean conversion.
Any non-zero number other than NaN is truthy.*/
{
    console.log("Hello TypeScript");
}


// try age value with 0, we don't get any output because IF is false for 0