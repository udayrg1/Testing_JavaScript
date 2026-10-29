let color: number = 3;

switch (color){
    case 1: console.log("Violet")
    break;
    case 2: console.log("Indigo")
    break;
    case 3: console.log("Blue")
    //break;  --> fall through condition
    case 4: console.log("Green")
    //break;
    case 5: console.log("Yellow")
    //break;
    case 6: console.log("Orange")
    //break;
    case 7: console.log("Red")
    break;
    default: console.log("Invalid Color")
}
