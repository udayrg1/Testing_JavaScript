function voteEligibilty(
    name: string, 
    age: number, 
    gender ? : string, 
    eligibile: string = "Eligible for voting",
    not_eligibile: string = "Not eligible for voting"
){
    if(age < 18) {
        console.log(name + " is", gender + " and less than 18 years and is "+ not_eligibile)
    } else {
        console.log(name + " is", gender + " and 18+ years old and is "+ eligibile)
    }
}

voteEligibilty("Uday",29,"Male")
voteEligibilty("Lokshitha",7)
voteEligibilty("Thrinethra",5)
