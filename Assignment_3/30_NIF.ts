//10.Write a JavaScript program that calculates employee bonuses based on performance and years of service. 
// Ask the user for the employee's performance rating ("Excellent," "Good," or "Average") and years of service. 
// Calculate and print the bonus amount.

const rating: string = "Average";
const salary: number = 50000;
const experience: number = 6;
let percentage: number;

if(rating === "Excellent"){
    if(experience >= 5){
        percentage = 20;
    } else {
        percentage = 15;
    }
} else if(rating === "Good"){
     if(experience >= 5){
        percentage = 12;
    } else {
        percentage = 8;
    }
} else if(rating === "Average"){
     if(experience >= 5){
        percentage = 6;
    } else {
        percentage = 3;
    }
} else {
    percentage = 0;
}

const bonus: number = (salary*percentage)/100;

console.log(bonus);