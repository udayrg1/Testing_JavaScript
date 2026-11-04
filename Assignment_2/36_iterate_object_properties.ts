let person = {
    name: "Ravi",
    age: 25,
    city: "Hyderabad"
};

// Iterate through all object properties
for (let key in person) {

    // Access each property value using its key
    console.log(key, ":", person[key as keyof typeof person]);
}