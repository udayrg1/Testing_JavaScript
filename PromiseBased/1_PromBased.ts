function voteEligibility(): Promise<string>{
    return new Promise((resolve, reject) => {
        let age: number = 23;
        if (age > 18){
            resolve("User can utilise their vote")
        } else {
            reject(new Error("User is not eligible for vote"))
        }
    });
}

async function ageCheck(): Promise<void>{
    let status: string = await voteEligibility();
    console.log("Status: "+status); 
}

ageCheck();