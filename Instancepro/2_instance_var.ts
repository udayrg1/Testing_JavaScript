//showing separate values for each object

class Animal{
    name:string;

    constructor(name:string){
        this.name = name;
    }
}

let y = new Animal("Lion");
let z = new Animal("Tiger");
console.log(y.name);
console.log(z.name);