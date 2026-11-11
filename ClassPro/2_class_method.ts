class Animals // ----> Animal is a class declared here and class starts from here

{   //horse is a method, starts here
    horse(): void {
        console.log("Horses are running")
    }// method ends here
    
    //status is a instance/non-static variable defined inside class and outside method
    status: string = "Horses are eating the green grass"
} //class ends here

//result is a object reference that stores entire class data from line 1 to line 10
let result = new Animals(); //variable declaration 
result.horse(); // we are calling method with object reference --> method call
console.log(result) // Printing object