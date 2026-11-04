let person = {
    name: "Ravi",
    age: 25,
    city: "Hyderabad"
};

// Create a shallow copy
let clonedPerson = { ...person };

console.log("Original:", person);
console.log("Cloned:", clonedPerson);

// Modify the cloned object
clonedPerson.name = "Kumar";

console.log("After modification:");
console.log("Original:", person);
console.log("Cloned:", clonedPerson);