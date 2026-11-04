// Method 1: Display employee name
function displayName(name: string): void {
    console.log("Employee Name:", name);
}

// Method 2: Accept parameters and call another method
function employeeDetails(name: string, age: number): void {

    // Call the first method
    displayName(name);

    console.log("Employee Age:", age);
}

// Call the second method
employeeDetails("Uday", 25);