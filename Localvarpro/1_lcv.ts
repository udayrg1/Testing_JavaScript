//A local variable is a variable declared inside a method, constructor, or block. It can only be accessed within the scope in which it is declared. 
// It cannot be accessed outside that scope.

//ex

class Colors{
    yellow(): void{
        let z: string = 'Banana'; //local variable
        console.log("Bananas are in Yellow color");  
    }
}

let fruits = new Colors();
fruits.yellow();//method call

/*
Explanation:
- z is a local variable declared inside the yellow() method.
- It can only be accessed within the yellow() method.
- You cannot access z directly using fruits.z.
*/