//Write a TypeScript program for fall-through.

const fruit: string = "apple";

switch (fruit) {
    case "apple":
        console.log("Apple matched");
    case "banana":
        console.log("Banana block (fall-through)");
    case "mango":
        console.log("Mango block (fall-through), break stops here");
        break;
    default:
        console.log("Unknown fruit");
}