// Define the object with an optional city property
let person: {
    name: string;
    age: number;
    city?: string;
} = {
    name: "Ravi",
    age: 25,
    city: "Hyderabad"
};

// Delete the city property
delete person.city;

console.log(person);