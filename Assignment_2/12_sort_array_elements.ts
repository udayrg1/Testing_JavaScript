let numbers: number[] = [45, 12, 89, 7, 34];

for (let i: number = 0; i < numbers.length - 1; i++) {
    for (let j: number = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp: number = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log("Sorted array:", numbers);