function voteEligibilty(
    name: string,
    age: number,
    gender?: string,
    eligibility: string = "Eligible for voting"
) {
    if (age < 18) {
        eligibility = "Not eligible for voting";
        console.log(name + " is less than 18 years and is " + eligibility);
    } else {
        console.log(name + " is 18+ years old and is " + eligibility);
    }
}

voteEligibilty("Uday", 29);
voteEligibilty("Lokshitha", 7);
voteEligibilty("Thrinethra", 5);