let fruits: string[] = ["apple", "banana", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.indexOf("kiwi") !== -1); // false
console.log(fruits.some(f => f === "mango")); // true