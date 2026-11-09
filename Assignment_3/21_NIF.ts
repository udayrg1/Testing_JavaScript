//1.Given x = 15 and y = 8, write a JavaScript program to determine if x is greater than y. If x is greater than y, 
// check if it's also greater than 20 and print appropriate messages accordingly. 

const x: number = 15, y = 8, z = 20;

if(x > y){
    if(x > z){
        console.log("x is greater than y and z")
    } else {
        console.log("x is greater than y but not z")
    }
} else {
    console.log("x is not greater than y")
}