// •	Пилешко меню –  10.35 лв. 
// •	Меню с риба – 12.40 лв. 
// •	Вегетарианско меню  – 8.15 лв. 


// От конзолата се четат 3 реда:
// •	Брой пилешки менюта – цяло число в интервала [0 … 99]
// •	Брой менюта с риба – цяло число в интервала [0 … 99]
// •	Брой вегетариански менюта – цяло число в интервала [0 … 99]


function foodDelivery(input){
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veggieMenus = Number(input[2]);
    let foodPrice = chickenMenus * 10.35 + fishMenus * 12.4 + veggieMenus * 8.15;
    let desertPrice = 0.20 * foodPrice;
    let orderPrice = desertPrice + foodPrice + 2.50;

    console.log(orderPrice);
}
foodDelivery(["2", "4", "3"]);