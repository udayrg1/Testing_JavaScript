//12.Write a JavaScript program for vehicle registration based on the type of vehicle and emissions. 
// Ask the user for the vehicle type (car or truck) and emissions status (clean or high). 
// Provide the registration fee based on the inputs.

const vehicleType: string = "car";
const emissions: string = "high";

if(vehicleType === "car"){
    if(emissions === "clean"){
        console.log("Your registartion fee is $300 only");
    } else if(emissions === "high"){
        console.log("Your registartion fee is $400 only")
    } else {
        console.log("Invalid emissions status");
    }
} else if(vehicleType === "truck"){
    if(emissions === "clean"){
        console.log("Your registartion fee is $500 only");
    } else if(emissions === "high") {
        console.log("Your registartion fee is $600 only");
    } else {
        console.log("Invalid emissions status");
    }
} else {
    console.log("Please enter either car or truck only");
}    