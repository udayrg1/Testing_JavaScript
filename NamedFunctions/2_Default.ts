function voteEligibilty(
    name: string, 
    age: number, 
    gender ? : string, 
    eligibility: string = "Eligible for voting"
){
    if(age < 18) {
        console.log(name + " is", gender + " and is less than 18 years and is not eligible for voting")
    } else {
        console.log(name + " is", gender + " and is 18+ years old and is "+ eligibility)
    }
}

voteEligibilty("Uday",29)
voteEligibilty("Lokshitha",7)
voteEligibilty("Thrinethra",5)
