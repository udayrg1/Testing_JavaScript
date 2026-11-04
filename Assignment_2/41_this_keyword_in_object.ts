let person = {
    name: "Ravi",
    age: 25,

    // Access object properties using this
    displayDetails: function () {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
};

// Call the object method
person.displayDetails();