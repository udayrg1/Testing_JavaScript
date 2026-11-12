/*

12. Why are we using fall-through inside a switch block?

Answer: We use fall-through on purpose to share one block of code between many cases (several case
labels written one below the other, without break). This avoids repeating the same code. Forgetting break by
mistake is a common bug, so use fall-through only when you really want it. */

const month: number = 4;
switch (month) {
case 1: case 3: case 5: case 7: case 8: case 10: case 12:
console.log("31 days"); break;
case 4: case 6: case 9: case 11:
console.log("30 days"); break;
default:
console.log("Check February separately");
}