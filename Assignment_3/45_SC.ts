//8.	Write a switch case to determine the type of a given polygon (triangle, quadrilateral, pentagon, etc.). 

const sides: number = 5;

switch (sides) {
    case 3:
        console.log("Triangle");
        break;

    case 4:
        console.log("Quadrilateral");
        break;

    case 5:
        console.log("Pentagon");
        break;

    case 6:
        console.log("Hexagon");
        break;

    case 7:
        console.log("Heptagon");
        break;

    case 8:
        console.log("Octagon");
        break;

    default:
        console.log("Other polygon or invalid number of sides");
}