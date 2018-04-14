function pcstore(priceOfProcessorInDLR, priceOfVideoCardInDLR, priceOfRAM, numberOfRAM, discountPercentage) {
    let priceOfProccessorInBGN = priceOfProcessorInDLR * 1.57;
    let priceOfVideoCardInBGN = priceOfVideoCardInDLR * 1.57;

    let priceOfProcessorAndVideoCardInBGN = priceOfProccessorInBGN + priceOfVideoCardInBGN;
    let discountPrice = priceOfProcessorAndVideoCardInBGN * discountPercentage;

    let priceOfRAMInBGN = (priceOfRAM * numberOfRAM) * 1.57;

    let sumInBGN = priceOfProccessorInBGN + priceOfVideoCardInBGN + priceOfRAMInBGN;
    let totalMoney = sumInBGN - discountPrice;

    console.log(`Money needed - ${totalMoney.toFixed(2)} leva.`);
}

let priceOfProcessorInDLR = 500;
let priceOfVideoCardInDLR = 200;
let priceOfRAM = 80;
let numberOfRAM = 2;
let discountPercentage = 0.05;

//let priceOfProcessorInDLR = 1200;
//let priceOfVideoCardInDLR = 850;
//let priceOfRAM = 120;
//let numberOfRAM = 4;
//let discountPercentage = 0.1;

//let priceOfProcessorInDLR = 200;
//let priceOfVideoCardInDLR = 100;
//let priceOfRAM = 80;
//let numberOfRAM = 1;
//let discountPercentage = 0.01;

pcstore(priceOfProcessorInDLR, priceOfVideoCardInDLR, priceOfRAM, numberOfRAM, discountPercentage);