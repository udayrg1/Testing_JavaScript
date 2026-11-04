let nums: number[] = [20, 30, 40];

// Add an element at the beginning
nums.unshift(10);
console.log("After unshift:", nums);

// Remove the first element
let removedElement: number | undefined = nums.shift();

console.log("After shift:", nums);
console.log("Removed element:", removedElement);