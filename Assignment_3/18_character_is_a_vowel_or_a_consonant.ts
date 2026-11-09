// Create a JavaScript program to check if another character is a vowel or a consonant.

const char: string = "e";
const vowels: string = "AEIOU";

if(vowels.includes(char.toUpperCase())){
    console.log(char, " is a vowel");    
} else {
    console.log(char, " is a consonant");    
}