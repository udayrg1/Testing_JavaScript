//6.	Create a switch case to handle different types of employees and calculate their salaries. 

const employeeType: string = "manager";

switch (employeeType) {
    case "manager":
        console.log("Employee salary: ₹60,000");
        break;

    case "developer":
        console.log("Employee salary: ₹45,000");
        break;

    case "tester":
        console.log("Employee salary: ₹35,000");
        break;

    case "intern":
        console.log("Employee salary: ₹15,000");
        break;

    default:
        console.log("Invalid employee type");
}