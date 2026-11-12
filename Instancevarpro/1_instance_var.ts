/* Instance variable: A variable which is declared INSIDE A CLASS but OUTSIDE OF METHOD is called Instance 
variable. It belongs to an object of the class and stores data specific to that object*/

class Animal{

    name: string = "Horse"; //instance variable
    age: number = 7; //instance variable

    //method declaration
    makeSound(): void{
        console.log("Horses always run")
    }
}

//creating objects
let i = new Animal();
console.log(i.name); //Horse
console.log(i.age);//7 
