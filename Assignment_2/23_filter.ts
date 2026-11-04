let nums: number[] = [10, 15, 20, 25, 30, 35, 40];

let evenNumbers: number[] = nums.filter((num: number) => {
    return num % 2 === 0;
});

console.log("Even Numbers:", evenNumbers);