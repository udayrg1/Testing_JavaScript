//6. Write a JavaScript program that checks if a person is eligible to vote. 
// Ask for the person's age and whether they are a citizen. 
// If the person is at least 16 years old and a citizen, 
// print "You are eligible to vote." Otherwise, print "You are not eligible to vote." 

const age: number = 20;
const isCitizen: boolean = true;

if(isCitizen){
    if(age >= 16){
        console.log("You are eligible to vote.")
    } else {
        console.log("You are not eligible to vote.")
    }
} else {
    console.log("You are not eligible to vote.")
}