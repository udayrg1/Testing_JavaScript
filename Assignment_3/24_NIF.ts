// 4.Write a JavaScript program that calculates the ticket price for a theme park based on age and height. 
// If a person is under 10 years old and under 3 feet tall, their ticket price is $8. 
// If they are under 10 but 3 feet tall or taller, their ticket price is $12. 
// For individuals 10 and older who are 3 feet tall or taller, the ticket price is $18

const age: number = 12;
const height: number = 5

if(age < 10){
    if(height >= 3){
        console.log("Ticket price is $12");
    } else {
        console.log("Ticket price is $8");
    } 
} else {
    if (height >= 3) {
        console.log("Ticket price is $18");
    } else {
        console.log("Ticket price is not specified");
    }
}