
// •	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// •	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// •	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// •	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

// Цена на тренировките за година: 365
// Цена на баскетболните кецове: 365 – 40% = 219
// Цена на баскетболен екип: 219 – 20% = 175.20
// Цена на баскетболна топка: 1 / 4 от 175.20 = 43.80
// Цена на баскетболни аксесоари: 1 /  5 от 43.80 = 8.76
// Обща цена за екипировката: 365 + 219 + 175.20 + 43.80 + 8.76 = 811.76


function equipment(input) {
    let yearlyPrice = Number(input[0]);
    let shoePrice = yearlyPrice - (yearlyPrice*0.4);
    let clothesPrice = shoePrice -(shoePrice * 0.2);
    let ballPrice = 0.25 * clothesPrice;
    let basketballAccessories = 0.2 * ballPrice;

    let totalSum = yearlyPrice + shoePrice + clothesPrice + ballPrice + basketballAccessories;

    console.log(totalSum);

}
equipment(["365"])