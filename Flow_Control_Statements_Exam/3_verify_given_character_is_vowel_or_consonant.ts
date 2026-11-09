// Write a JavaScript program to verify given character is vowel (or)consonant?

const char: string = "b";
const vowels: string = "aeiou";

if (vowels.includes(char.toLowerCase())) {
    console.log("The given character is vowel");
} else {
    console.log("The given character is consonant");
}