let nums: number[] = [10, 20, 30];

// Add an element at the end
nums.push(40);
console.log("After push:", nums);

// Remove the last element
let removedElement: number | undefined = nums.pop();

console.log("After pop:", nums);
console.log("Removed element:", removedElement);