// Write a JavaScript program to verify given character is vowel (or)consonant?

const char: string = "U";
const lowerChar: string = char.toLowerCase();

const vowels: string = "aeiou";

if (vowels.includes(lowerChar)) {
    console.log("The given character is vowel");
} else {
    console.log("The given character is consonant");
}