let nums: number[] = [10, 20, 30, 40];

// Calculate the total sum
let total: number = nums.reduce((sum: number, num: number) => {
    return sum + num;
}, 0);

console.log("Total Sum:", total);