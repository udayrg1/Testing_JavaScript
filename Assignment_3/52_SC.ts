//Write a TypeScript program to terminate the looping.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Found 5, terminating the loop");
        break;
    }
    console.log("i =", i);
}