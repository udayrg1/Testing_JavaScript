let person = {
    name: "Uday",
    age: 25
};

let address = {
    city: "Hyderabad",
    state: "Telangana"
};

// Merge both objects into a new object
let employee = {
    ...person,
    ...address
};

console.log(employee);