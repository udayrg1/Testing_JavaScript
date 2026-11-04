let nums : number[] = [11, 87, 33, 67, 99, 43];
let largest: number = nums[0]

for(let i: number = 1; i < nums.length; i++) {
    if(nums[i] > largest)
        largest = nums[i];
}
console.log(largest);

