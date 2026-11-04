// Create a prototype object
let personPrototype = {
    greet: function () {
        console.log("Hello!");
    }
};

// Create a new object using the prototype
let person = Object.create(personPrototype);

// Add properties to the new object
person.name = "Ravi";
person.age = 25;

console.log(person.name);
console.log(person.age);

// Access the inherited method
person.greet();