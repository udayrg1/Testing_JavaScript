//10.	Create a switch case to handle different types of animals and display their habitats. 

const animal: string = "lion";

switch (animal) {
    case "lion":
        console.log("Habitat: Grasslands and savannas");
        break;

    case "elephant":
        console.log("Habitat: Forests and grasslands");
        break;

    case "penguin":
        console.log("Habitat: Antarctic and other coastal regions");
        break;

    case "camel":
        console.log("Habitat: Deserts");
        break;

    case "monkey":
        console.log("Habitat: Tropical forests");
        break;

    default:
        console.log("Animal information not available");
}