function ticketBooking(
    age : number,
    category: "Normal citizen" | "Senior Citizen" | "Defence Veteran" | "EX President" = "Normal citizen",
    ticketPrice : string = "Full Price")

    {
        if (age >= 60 && category === "Normal citizen") {
        category = "Senior Citizen";
        ticketPrice = "50% Concession";
        } else if (category === "Defence Veteran") {
            ticketPrice = "70% Concession"
        } else if (category === "EX President") {
            ticketPrice = "100% Concession"
        }
        console.log("Passenger category: " + category);
        console.log("Ticket price: " + ticketPrice);
    }


ticketBooking(30)
ticketBooking(70)
ticketBooking(79, "EX President")
ticketBooking(69, "Defence Veteran")
ticketBooking(72, "EX President")
ticketBooking(60)
ticketBooking(29)