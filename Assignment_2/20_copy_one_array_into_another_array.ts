let nums: number[] = [10, 20, 30, 40, 50];

let copiedArray: number[] = [];

for (let i: number = 0; i < nums.length; i++) {
    copiedArray.push(nums[i]);
}

console.log("Original Array:", nums);
console.log("Copied Array:", copiedArray);