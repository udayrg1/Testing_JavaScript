//5.	Implement a switch case to convert numerical grades to letter grades (A, B, C, D, F). 

const marks: number = 85;

switch (true) {
    case (marks >= 90 && marks <= 100):
        console.log("Grade A");
        break;

    case (marks >= 80 && marks < 90):
        console.log("Grade B");
        break;

    case (marks >= 70 && marks < 80):
        console.log("Grade C");
        break;

    case (marks >= 60 && marks < 70):
        console.log("Grade D");
        break;

    case (marks >= 0 && marks < 60):
        console.log("Grade F");
        break;

    default:
        console.log("Invalid marks");
}