let accountBalance: number = 5000;
let withdrawalAmount: number = 3000;
let pinCorrect: boolean = true;

if (pinCorrect) {
    console.log("PIN verified successfully");
    if (withdrawalAmount <= accountBalance) {
        console.log("Withdrawal Successful");
        console.log("Please collect your cash");
    } else {
        console.log("Insufficient account balance")
    }
} else {
    console.log("Incorrect PIN. Please try again")
}