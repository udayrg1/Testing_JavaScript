let productAvailability: boolean = true;
let paymentStatus: boolean = true;

if (productAvailability) {
    console.log("Product is Available");
    if (paymentStatus) {
        console.log("and payment is done and order placed successfully")
    } else {
    console.log("But payment is failed, please try again!")
    }
} else {
    console.log("Product is out of stock")
}