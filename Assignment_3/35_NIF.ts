//15.	Develop a JavaScript program for a pet adoption center that classifies pets based on their type and age.
//  Ask the user to input the type of pet (dog, cat, or other) and the pet's age.
//  Provide information on available pets that match their criteria. 

const petType: string = "cat";
const age: number = 6;

if (petType === "dog") {
    if (age < 1) {
        console.log("Available pets: Puppy dogs. They need basic training and extra care.");
    } else if (age <= 7) {
        console.log("Available pets: Adult dogs. They are suitable for families and regular outdoor activities.");
    } else {
        console.log("Available pets: Senior dogs. They need a comfortable home and gentle care.");
    }
} else if (petType === "cat") {
    if (age < 1) {
        console.log("Available pets: Kittens. They need socialization and extra attention.");
    } else if (age <= 7) {
        console.log("Available pets: Adult cats. They are suitable for indoor companionship.");
    } else {
        console.log("Available pets: Senior cats. They need a peaceful environment and regular care.");
    }
} else if (petType === "other") {
    if (age < 1) {
        console.log("Available pets: Young rabbits, birds and other small animals.");
    } else if (age <= 7) {
        console.log("Available pets: Adult rabbits, birds and other small animals.");
    } else {
        console.log("Available pets: Senior small animals. Check their individual care requirements.");
    }
} else {
    console.log("Please enter a valid pet type: dog, cat or other.");
}
