let nums: number[] = [10, 20, 30, 40, 50, 60];

nums.pop();         //removes last element - 60
nums.shift();       //removes first element - 10
nums.splice(1,1);   // removed 1 element at index 1 (30)

console.log(nums)   //20,40,50

let woFifty: number[] = nums.filter(x => x !== 50);
console.log(woFifty) //20,40