// 1.	Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
// 2.	Необходимо количество боя (в литри) - цяло число в интервала [1…100]
// 3.	Количество разредител (в литри) - цяло число в интервала [1…30]
// 4.	Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]

// •	Предпазен найлон - 1.50 лв. за кв. метър
// •	Боя - 14.50 лв. за литър
// •	Разредител за боя - 5.00 лв. за литър
// За всеки случай, към необходимите материали, Румен иска да добави още 10% от количеството боя и 2 кв.м. найлон, разбира се и 0.40 лв.
//  за торбички. Сумата, която се заплаща на майсторите за 1 час работа, е равна на 30% от сбора на всички разходи за материали

function repainting(input){
let nylonQuantity = Number(input[0]);
let paintLiters = Number(input[1]);
let thinnerQuantity = Number(input[2]);
let workHours =Number(input[3]);

let additionalPaint = 0.10 * paintLiters;
let totalPaintQuantity = paintLiters +additionalPaint;
let totalNylonQuantity = nylonQuantity +2;
let totalMaterialPrice = totalPaintQuantity * 14.5 + totalNylonQuantity * 1.5 + thinnerQuantity * 5 + 0.40;
let workPerHourPrice = 0.3 * totalMaterialPrice;
let totalWorkersWage = workPerHourPrice * workHours;

let finalSum = totalMaterialPrice + totalWorkersWage ;

console.log(finalSum);

}
repainting(["10","11","4","8"]);