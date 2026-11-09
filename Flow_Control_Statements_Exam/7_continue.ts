//Continue statement is used inside loops to skip the current iteration and move to the next iteration.

for (let num: number = 1; num <= 10; num++) {

    if (num === 5) {
        continue; // Skip the current iteration when num is 5
    }

    console.log(num);
}