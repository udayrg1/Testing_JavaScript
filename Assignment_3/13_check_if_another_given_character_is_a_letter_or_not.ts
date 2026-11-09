//Implement a JavaScript program to check if another given character is a letter or not.

const char: string = '3';

if(char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z'){
    console.log(char, " is a letter")
} else {
    console.log(char, " is not a letter")
}