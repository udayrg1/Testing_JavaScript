/*
13. When will the default case be executed inside a switch block?
Answer: The default case runs when none of the case values match the switch expression. It works like the
else part of an if-else. (If default is in the middle and has no break, execution also falls through to the next case.)
*/

const color: string = "pink";
switch (color) {
case "red": console.log("Red"); break;
case "blue": console.log("Blue"); break;
default: console.log("No case matched, so default runs");
}