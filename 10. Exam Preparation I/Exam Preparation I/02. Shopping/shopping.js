function shopping(input) {
    let budget = input[0];

    let numberOfChocolates = input[1];
    let moneyForChocolates = numberOfChocolates * 0.65;

    let litersOfMilk = input[2];
    let moneyForMilk = litersOfMilk * 2.70;

    let numberOfOranges = Math.floor(numberOfChocolates - (numberOfChocolates * 0.35));
    let moneyForOranges = numberOfOranges * 0.20;

    let totalSum = moneyForChocolates + moneyForMilk + moneyForOranges;
    let moneyLeft = Math.abs(budget - totalSum);

    if (budget >= totalSum) {
        console.log(`You got this, ${moneyLeft.toFixed(2)} money left.`);
    } else if (budget < totalSum) {
        console.log(`Not enough money, you need ${moneyLeft.toFixed(2)} more!`)
    }
}

let input = [10, 5, 1.5];
// let input = [3, 4, 2.7];

shopping(input);