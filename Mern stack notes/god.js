function lemonDistribution() {
    let lemons = Int(prompt("Enter the number of lemons in hand:"));

    console.log("No of lemon in hand: " + lemons);

    let god1 = 7;
    let god2 = 7;
    let god3 = 7;

    if (lemons >= god1) {
        console.log("God 1: 7 offered");
    } else {
        console.log("God 1: " + lemons + " need");
        console.log("Shortage: " + (god1 + god2 + god3 - lemons));
        return;
    }