// Create a constructor function
function Person(this: any, name: string, age: number, city: string) {

    // Assign values to object properties
    this.name = name;
    this.age = age;
    this.city = city;
}

// Create objects using the constructor
let person1 = new (Person as any)("Ravi", 25, "Hyderabad");
let person2 = new (Person as any)("Kumar", 30, "Chennai");

console.log(person1);
console.log(person2);