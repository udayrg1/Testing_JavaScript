let nums : number[] = [11, 87, 33, 67, 99, 43];
let smallest: number = nums[0]

for(let i: number = 1; i < nums.length; i++) {
    if(nums[i] < smallest)
        smallest = nums[i];
}
console.log(smallest);