//Write a JavaScript program to reverse a string using string methods

// Reverse a string using JavaScript methods

const originalString: string = "Uday";

// Step 1: Convert the string into an array of characters
const characters: string[] = originalString.split(""); // [ 'U', 'd', 'a', 'y' ]

// Step 2: Reverse the array elements
const reversedArray: string[] = characters.reverse(); // [ 'y', 'a', 'd', 'U' ]

// Step 3: Join the array elements back into a string
const reversedString: string = reversedArray.join("");

console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);