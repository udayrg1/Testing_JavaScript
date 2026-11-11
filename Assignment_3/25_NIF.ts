// 5.Write a JavaScript program for ordering food. Ask the user to select a type of food (e.g., "Sandwich" or "Pasta"). 
// If they choose "Sandwich," ask if they want chips. 
// If they choose "Pasta," ask if they want garlic bread. Print their order with the additional items if chosen.

const food: string = "Sandwich";
const additionalItem: string = "No";

if (food === "Sandwich") {
    if (additionalItem === "Yes") {
        console.log("Your order: Sandwich with chips");
    } else {
        console.log("Your order: Sandwich");
    }
} else if (food === "Pasta") {
    if (additionalItem === "Yes") {
        console.log("Your order: Pasta with garlic bread");
    } else {
        console.log("Your order: Pasta");
    }
} else {
    console.log("Invalid food selection");
}