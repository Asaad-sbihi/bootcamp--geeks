function hotelCost(nights) {
    const costPerNight = 140;
    return nights * costPerNight;
}

function planeRideCost(destination) {
    destination = destination.toLowerCase();

    if (destination === "london") return 183;
    if (destination === "paris") return 220;
    return 300; 
}

function rentalCarCost(days) {
    const costPerDay = 40;
    let total = days * costPerDay;

    if (days > 10) {
        total *= 0.95; 
    }

    return total;
}

function totalVacationCost() {
    let nights;
    do {
        nights = Number(prompt("How many nights would you like to stay at the hotel?"));
    } while (isNaN(nights) || nights <= 0);

    let destination;
    do {
        destination = prompt("What is your travel destination?");
    } while (!isNaN(destination) || destination.trim() === "");

    let days;
    do {
        days = Number(prompt("How many days would you like to rent the car?"));
    } while (isNaN(days) || days <= 0);

    const hotel = hotelCost(nights);
    const plane = planeRideCost(destination);
    const car = rentalCarCost(days);

    
    console.log(`The hotel cost: $${hotel}, the plane tickets cost: $${plane}, the car rental cost: $${car}`);
    console.log(`Total vacation cost: $${hotel + plane + car}`);
}


totalVacationCost();
