//3.Create a switch case to handle different types of shapes and calculate their areas. 

const shape: string = "circle";

const radius: number = 5;
const length: number = 10;
const width: number = 5;

switch (shape) {
    case "circle":
        console.log("Area of circle:", 3.14 * radius * radius);
        break;

    case "rectangle":
        console.log("Area of rectangle:", length * width);
        break;

    case "square":
        console.log("Area of square:", length * length);
        break;

    default:
        console.log("Invalid shape");
}