//Write a TypeScript program for a delivery service that calculates delivery charges based on
//distance and order amount. Ask the user for the distance (in miles) and order amount. 
// Apply different charges based on the distance and order amount.

const distance: number = 9;
const orderAmount: number = 100;
let charge: number;

if (distance <= 5) {
    if (orderAmount < 50) {
        charge = 5;
    } else {
        charge = 0;
    }
} else {
    if (orderAmount < 50) {
        charge = 10;
    } else {
        charge = 5;
    }
}

console.log("Delivery charge: $", charge);