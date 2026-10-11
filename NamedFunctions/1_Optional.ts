function accountCreation(username: string, aadhar?: number) {
    // username: string — a required parameter.
    // aadhar?: number — an optional parameter.

    if (aadhar == undefined) {
        // Strict equality: compares without type conversion.
        // console.log(10 == "10");  // true
        // console.log(10 === "10"); // false

        console.log("Hi I am creating my Gmail account and username as: " + username);
    } else {
        console.log("Hi I am in the bank for creating account with customer name as: " + username);
    }
}

accountCreation("Uday Kumar Ramagiri");
