function airplane(departureHour, departureMinutes, flightDurationInMinutes) {
    let sumOfMinutes = departureMinutes + flightDurationInMinutes;
    let sumOfHours = Math.floor(sumOfMinutes / 60);

    let arrivalTime = sumOfHours + departureHour;
    let arrivalMinutes = sumOfMinutes % 60;

    if (arrivalTime >= 24) {
        arrivalTime -= 24;
    }

    console.log(`${arrivalTime}h ${arrivalMinutes}m`);
}

let departureHour = 6;
let departureMinutes = 50;
let flightDurationInMinutes = 90;

//let departureHour = 8;
//let departureMinutes = 40;
//let flightDurationInMinutes = 120;

//let departureHour = 23;
//let departureMinutes = 50;
//let flightDurationInMinutes = 75;

airplane(departureHour, departureMinutes, flightDurationInMinutes);