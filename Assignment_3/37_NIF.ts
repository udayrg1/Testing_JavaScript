//Create a JavaScript program for a study planner that helps students organize their study sessions based on subjects and priorities. 
// Ask the user to input their subjects and the priority level for each subject. 
// Provide a study schedule based on their inputs.

const subject: string = "Playwright";
const priority: string = "high";

if (subject === "JavaScript") {
    if (priority === "high") {
        console.log("Study JavaScript for 2 hours.");
    } else if (priority === "medium") {
        console.log("Study JavaScript for 1 hour.");
    } else if (priority === "low") {
        console.log("Revise JavaScript for 30 minutes.");
    } else {
        console.log("Invalid priority level.");
    }
} else if (subject === "SQL") {
    if (priority === "high") {
        console.log("Study SQL for 2 hours.");
    } else if (priority === "medium") {
        console.log("Study SQL for 1 hour.");
    } else if (priority === "low") {
        console.log("Revise SQL for 30 minutes.");
    } else {
        console.log("Invalid priority level.");
    }
} else if (subject === "Playwright") {
    if (priority === "high") {
        console.log("Study Playwright for 2 hours.");
    } else if (priority === "medium") {
        console.log("Study Playwright for 1 hour.");
    } else if (priority === "low") {
        console.log("Revise Playwright for 30 minutes.");
    } else {
        console.log("Invalid priority level.");
    }
} else {
    console.log("Please enter JavaScript, SQL or Playwright.");
}
