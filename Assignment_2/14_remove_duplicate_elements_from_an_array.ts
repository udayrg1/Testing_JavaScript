let numbers: number[] = [10, 20, 30, 20, 40, 10, 50];

let uniqueNumbers: number[] = [];

for (let i: number = 0; i < numbers.length; i++) {
    let isDuplicate: boolean = false;
    for (let j: number = 0; j < uniqueNumbers.length; j++) {
        if (numbers[i] === uniqueNumbers[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        uniqueNumbers.push(numbers[i]);
    }
}

console.log("Original Array:", numbers);
console.log("After Removing Duplicates:", uniqueNumbers);