let person = {
    name: "Uday",
    age: 25,
    city: "Hyderabad"
};

// Get only property names
let keys = Object.keys(person);

// Get only property values
let values = Object.values(person);

// Get property names and values together
let entries = Object.entries(person);

console.log("Keys:", keys);
console.log("Values:", values);
console.log("Entries:", entries);