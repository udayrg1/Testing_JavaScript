let person = {
    name: "Uday",
    age: 25,
    city: "Hyderabad"
};

// Check whether the property exists
if ("age" in person) {
    console.log("Key exists");
} else {
    console.log("Key does not exist");
}