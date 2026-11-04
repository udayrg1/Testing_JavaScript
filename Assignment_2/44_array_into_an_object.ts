// Create an array containing key-value pairs
let person: [string, string | number][] = [
    ["name", "Ravi"],
    ["age", 25],
    ["city", "Hyderabad"]
];

// Convert array into an object
let personObject = Object.fromEntries(person);

console.log(personObject);