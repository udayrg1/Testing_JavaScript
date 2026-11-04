let nums: number[] = [10, 50, 30, 90, 70, 90, 10, 30, 50];

// Remove duplicate elements and sort in descending order
let sortedArray: number[] = [...new Set(nums)].sort((a, b) => b - a);

// Check whether the array has at least two distinct elements
if (sortedArray.length >= 2) {
    console.log("Second Largest:", sortedArray[1]);
} else {
    console.log("Second largest element does not exist");
}