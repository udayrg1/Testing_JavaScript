function sumOfMarks(...marks:number[]) {


    let i : number = 0
    for (let m of marks){
        i+=m;
    }
    console.log("The sum of marks are: " + i)
}

sumOfMarks(76,69,98,-90,45,87,54)