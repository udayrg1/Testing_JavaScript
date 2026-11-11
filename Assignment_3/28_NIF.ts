//8.Write a JavaScript program that classifies a character as a vowel, consonant, or neither. 
// Ask the user to enter a single character. If it's a vowel (a, e, i, o, u), print "Vowel." 
// If it's a consonant, print "Consonant." If it's neither (e.g., a digit or special character), print "Neither."

// 8. Classify a character as vowel, consonant, or neither

const ch: string = "k";

if (ch.toLowerCase() >= "a" && ch.toLowerCase() <= "z") {
    if (ch.toLowerCase() === "a" || ch.toLowerCase() === "e" || ch.toLowerCase() === "i" 
    || ch.toLowerCase() === "o" || ch.toLowerCase() === "u") {
        console.log("Vowel.");
    } else {
        console.log("Consonant.");
    }
} else {
    console.log("Neither.");
}