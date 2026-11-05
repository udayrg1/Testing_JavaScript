//user defined exception

let age: number = 14;

if (age < 18) {
    throw new Error("You are not eligible for voting")
} else {
    console.log("Kindly utitlise vote right")
}