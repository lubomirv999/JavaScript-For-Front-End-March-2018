function charityCampaign(daysOfCampaign, amountOfConfectioners, amountOfCakes, amountOfWaffles, amountOfPancakes) {
    let priceOfCake = 45;
    let priceOfWaffle = 5.80;
    let priceOfPancake = 3.20;

    let cakesTotalPrice = amountOfCakes * priceOfCake;
    let wafflesTotalPrice = amountOfWaffles * priceOfWaffle;
    let pancakesTotalPrice = amountOfPancakes * priceOfPancake;

    let totalPriceOfFood = cakesTotalPrice + wafflesTotalPrice + pancakesTotalPrice;
    let moneyForOneDay = totalPriceOfFood * amountOfConfectioners;

    let totalPrice = daysOfCampaign * moneyForOneDay;
    let totalPriceAfterExpenses = totalPrice - (totalPrice /8);

    console.log(totalPriceAfterExpenses.toFixed(2));
}

let daysOfCampaign = 20;
let amountOfConfectioners = 8;
let amountOfCakes = 14;
let amountOfWaffles = 30;
let amountOfPancakes = 16;

//let daysOfCampaign = 131;
//let amountOfConfectioners = 5;
//let amountOfCakes = 9;
//let amountOfWaffles = 33;
//let amountOfPancakes = 46;

charityCampaign(daysOfCampaign, amountOfConfectioners, amountOfCakes, amountOfWaffles, amountOfPancakes);