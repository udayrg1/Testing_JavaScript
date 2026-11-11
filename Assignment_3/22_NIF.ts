//2. Write a JavaScript program to check if a person is eligible for a credit card based on their age and income. 
// If the person is underage, print "You are underage." 
// If they are of age but have an income below $40,000, print "Your income is too low for a credit card." 

const income: number = 15000;
const age: number = 20

if(age < 18){
    console.log("You are underage.")
} else if(income < 40000){
    console.log("Your income is too low for a credit card.")
} else {
    console.log("You are eligible for a credit card.")
}