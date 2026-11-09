const testAges: number[] = [12, 17, 18, 45, 0];

for (const age of testAges) {
    if (age >= 18) {
        console.log("Age " + age + ": Eligible to vote");
    } else if (age <= 0) {
        console.log("Age " + age + ": Invalid age");
    } else {
        console.log("Age " + age + ": Not eligible to vote");
    }
}
