function studentInfo(stdid: number, stdname: string): string {
    return "Student ID: " + stdid + ", Student Name: " + stdname;
}

let result: string = studentInfo(26, "Uday");

console.log(result);