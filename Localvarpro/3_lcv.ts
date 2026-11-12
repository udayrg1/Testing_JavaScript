class Colors{
    red(): void{
        let i: string = "Apples"; //local variable
        console.log("Apples are in Red color");
        console.log("here i stands for red method: " +i);
    }

     orange(): void{
        let i: string = "Oranges"; //local variable
        console.log("Oranges are in Orange color");
        console.log("here i stands for orange method: " +i);
    }
}

let fruits = new Colors();
fruits.red();//method call
fruits.orange();//method call

/*
Both methods have a variable named i, but they are independent.

Why?
- red() has its own local variable i, storing "Apples".
- orange() has its own local variable i, storing "Oranges".
- Changing one does not affect the other.

Why does this work?
1. The variable i inside red() belongs only to the red() method.
2. The variable i inside orange() belongs only to the orange() method.
3. Both variables have separate scopes, so they don't conflict with each other.
4. Each variable can be accessed only inside its own method.
Remember: Two different methods in the same class can have local variables with the same name because each method has its own scope.
*/

