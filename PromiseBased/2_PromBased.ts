function voteEligibility(): Promise<string>{
    return new Promise((resolve, reject) => {
        let age = 17;
        if(age > 18){
            resolve("User can utilise their vote")
        } else {
            reject(new Error("User is not eligible for vote"))
        }
    })
}

async function eligibilityCheck(): Promise<void> {
    let status: string = await voteEligibility()
    //we are strong voteEligibility() function value in status variable
    console.log(status)
}

eligibilityCheck()