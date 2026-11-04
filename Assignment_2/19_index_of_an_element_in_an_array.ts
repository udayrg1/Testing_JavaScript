let nums: number[] = [10, 20, 30, 40, 50];

let searchElement: number = 30;
let foundIndex: number = -1;

for (let i: number = 0; i < nums.length; i++) {

    if (nums[i] === searchElement) {
        foundIndex = i;
        break;
    }
}

if (foundIndex !== -1) {
    console.log("Element found at index:", foundIndex);
} else {
    console.log("Element not found");
}