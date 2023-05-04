// •	Декорът за филма е на стойност 10% от бюджета. 
// •	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.

// Функцията получава 3 аргумента:
// 1.	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
// 2.	Брой на статистите – цяло число в интервала [1 … 500]
// 3.	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
// Изход
// На конзолата трябва да се отпечатат два реда:
// •	Ако  парите за декора и дрехите са повече от бюджета:
// o	"Not enough money!"
// o	"Wingard needs {парите недостигащи за филма} leva more."
// •	Ако парите за декора и дрехите са по малко или равни на бюджета:
// o	"Action!" 
// o	"Wingard starts filming with {останалите пари} leva left."
// Резултатът трябва да е форматиран до втория знак след десетичната запетая.



function godzillaKong (input){
let movieBudget = Number(input[0]);
let sideActors = Number (input[1]);
let actorClothingPerPerson = Number(input[2]);

let decorPrice = 0.10 * movieBudget;
let totalClothesPrice = sideActors*actorClothingPerPerson;

if(sideActors > 150){
    totalClothesPrice = 0.90 * totalClothesPrice;
}
let totalPrice = decorPrice+totalClothesPrice;

if(totalPrice>movieBudget){
    let moneyNeeded = totalPrice-movieBudget;
    console.log("Not enough money!");
	console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);

}else {
    let moneyLeft = movieBudget - totalPrice; 
    console.log("Action!");
    console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
}
}
godzillaKong (["9587.88","222","55.68"])



