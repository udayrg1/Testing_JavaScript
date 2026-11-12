//13.Write a JavaScript program that helps a user plan a trip based on destination and budget.
// Ask the user for their desired destination and budget.
// Recommend different travel options and accommodations based on their inputs. 

const destination: string = "Nepal";
const budget: number = 10000;

if(destination === "Bhutan"){
    if(budget >= 35000){
        console.log("You can catch a flight and reach Bhutan and stay in a mountain resorts")
    } else if(budget >= 25000){
        console.log("You can catch a train and reach Bhutan and stay in a tea-estate bungalows")
    } else if(budget >= 15000){
        console.log("You can catch a bus and reach Bhutan and stay in a lakeside cottages")
    } else {
        console.log("Please sit in home and focus on career and think about trips later")
    }
} else if(destination === "Nepal"){
    if(budget >= 40000){
        console.log("You can catch a flight and reach Nepal and stay in a mountain resorts")
    } else if(budget >= 35000){
        console.log("You can catch a train and reach Nepal and stay in a tea-estate bungalows")
    } else if(budget >= 25000){
        console.log("You can catch a bus and reach Nepal and stay in a lakeside cottages")
    } else {
        console.log("Please sit in home and focus on career and think about trips later")
    }
} else {
    console.log("Please enter either Bhutan or Nepal only")
}