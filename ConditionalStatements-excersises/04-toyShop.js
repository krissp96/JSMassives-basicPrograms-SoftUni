// 1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
// 2.	Брой пъзели - цяло число в интервала [0… 1000]
// 3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
// 4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
// 5.	Брой миньони - цяло число в интервала [0 … 1000]
// 6.	Брой камиончета - цяло число в интервала [0 … 1000]
// Цени на играчките:
// •	Пъзел - 2.60 лв.
// •	Говореща кукла - 3 лв.
// •	Плюшено мече - 4.10 лв.
// •	Миньон - 8.20 лв.
// •	Камионче - 2 лв.
// Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. От спечелените
//  пари Петя трябва да даде 10% за наема на магазина. Да се пресметне дали парите ще ѝ стигнат да
//   отиде на екскурзия.


function toyShop(input) {
    let vacationPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let talkingDollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);
    

    let totalPrice = puzzlesCount * 2.60 + talkingDollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;
    let totalCount = puzzlesCount + talkingDollsCount + bearsCount + minionsCount + trucksCount;

    if (totalCount >= 50) {
        totalPrice = 0.75 * totalPrice;

    }
    totalPrice = 0.90 * totalPrice;
    if (totalPrice >= vacationPrice) {
        let moneyLeft = totalPrice - vacationPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {

        let moneyNeeded = vacationPrice - totalPrice;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}
toyShop(["320", "8", "2", "5", "5", "1"])

