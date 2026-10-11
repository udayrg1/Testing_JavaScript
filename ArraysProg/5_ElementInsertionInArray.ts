//["Gold Fish","Flower Horn","Arowana","Angel Fish","Clown Fish","Guppy Fish","Koi Fish","Snake Head Fish"]
// index of fishes are        0           1             2          3       4         5          6         7          8
// No of elements             1           2             3          4       5         6          7         8          9

let fishes : string[] = new Array(58);

fishes[4] = "Koi Fish";
fishes[39] = "Arowana";

console.log(fishes[4]);
console.log(fishes[39]);
console.log("The number of stored fishes(elements) are " + fishes.length)

fishes[102] = "Parrot Fish"

console.log("The number of stored fishes(elements) after adding 'Parrot Fish' is " + fishes.length)