let person = {
    name: "Ravi",
    age: 25,
    city: "Hyderabad",
    salary: 50000
};

// Get all property names
let properties = Object.keys(person);

// Count the properties
let count: number = properties.length;

console.log("Total properties:", count);