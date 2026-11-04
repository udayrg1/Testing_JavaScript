let person1 = {
    name: "Uday",
    age: 25,
    city: "Hyderabad"
};

let person2 = {
    name: "Uday",
    age: 25,
    city: "Hyderabad"
};

// Convert both objects into strings and compare
if (JSON.stringify(person1) === JSON.stringify(person2)) {
    console.log("Both objects are equal");
} else {
    console.log("Objects are not equal");
}