/*

11.	What is a fall-through inside a switch block? 

Answer: Fall-through means that after a matching case runs, the switch does not stop. It keeps running the
statements of the next cases (even if they do not match) until it reaches a break or the end of the switch block. */

const n: number = 1;
switch (n) {
case 1: console.log("one"); // no break here
case 2: console.log("two"); // runs too (fall-through)
case 3: console.log("three"); break;
default: console.log("other");
}