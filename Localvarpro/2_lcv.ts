class Colors{

    red(): void{
        let x: string = "Tomatoes"; //local variable
        console.log("Tomatoes are in Red color");
        console.log("Here x strand for - red method: " +x);
    }
}

let veg = new Colors();
veg.red(); //method call