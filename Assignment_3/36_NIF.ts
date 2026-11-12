//Write a JavaScript program for a gift recommendation service that suggests gifts based on the recipient's interests and preferences.
// Ask the user to input information about the recipient and occasions, and provide gift suggestions accordingly. 

const interest: string = "sports";
const occasion: string = "wedding";

if (occasion === "birthday") {
    if (interest === "technology") {
        console.log("Gift suggestion: Wireless headphones, smartwatch or Bluetooth speaker.");
    } else if (interest === "sports") {
        console.log("Gift suggestion: Sports shoes, fitness tracker or cricket kit.");
    } else if (interest === "fashion") {
        console.log("Gift suggestion: Stylish watch, branded handbag or fashion accessories.");
    } else {
        console.log("No gift suggestions available for this interest.");
    }
} else if (occasion === "anniversary") {
    if (interest === "technology") {
        console.log("Gift suggestion: Smart home device, premium earbuds or digital photo frame.");
    } else if (interest === "sports") {
        console.log("Gift suggestion: Personalized sports jersey, gym accessories or sports watch.");
    } else if (interest === "fashion") {
        console.log("Gift suggestion: Designer clothing, elegant jewellery or a premium perfume.");
    } else {
        console.log("No gift suggestions available for this interest.");
    }
} else if (occasion === "wedding") {
    if (interest === "technology") {
        console.log("Gift suggestion: Smart TV, tablet or home automation device.");
    } else if (interest === "sports") {
        console.log("Gift suggestion: Premium sports equipment or a couple's fitness package.");
    } else if (interest === "fashion") {
        console.log("Gift suggestion: Designer outfits, luxury accessories or matching watches.");
    } else {
        console.log("No gift suggestions available for this interest.");
    }
} else {
    console.log("Please enter birthday, anniversary or wedding.");
}
