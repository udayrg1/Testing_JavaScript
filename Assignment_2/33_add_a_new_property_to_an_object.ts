// Define the object with an optional phone property
let person: {
    name: string;
    age: number;
    city: string;
    phone?: number;
} = {
    name: "Ravi",
    age: 25,
    city: "Hyderabad"
};

// Add a new property
person.phone = 9876543210;

console.log(person);