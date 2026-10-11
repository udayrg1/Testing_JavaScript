let totalMarks: number = 0;


function studentinfo(
    stdid: number,
    stdname: string,
    stdept: string,
    subname: string,
    stdmarks: number,
    isActive: boolean) : void

{
    totalMarks += stdmarks;
    console.log(subname + " Marks: " + stdmarks);
}

studentinfo(26, "Uday", "EEE", "CVSM", 85, true)
studentinfo(26, "Uday", "EEE", "EDC", 78, true)
studentinfo(26, "Uday", "EEE", "PSI", 93, true)
studentinfo(26, "Uday", "EEE", "ECII", 66, true)
studentinfo(26, "Uday", "EEE", "DE", 71, true)
studentinfo(26, "Uday", "EEE", "DC Machines", 55, true)

console.log("The sum of student marks is: " + totalMarks);