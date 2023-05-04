// Петър иска да купи N видеокарти, M процесора и P на брой рам памет. Ако броя на видеокартите е 
// по-голям от този на процесорите получава 15% отстъпка от крайната сметка. Важат следните цени:
// •	Видеокарта – 250 лв./бр.
// •	Процесор – 35% от цената на закупените видеокарти/бр.
// •	Рам памет – 10% от цената на закупените видеокарти/бр.
// Да се изчисли нужната сума за закупуване на материалите и да се пресметне дали бюджета ще му стигне.
// Вход
// Входът се състои от четири реда:
// 1.	Бюджетът на Петър - реално число в интервала [0.0…100000.0]
// 2.	Броят видеокарти - цяло число в интервала [0…100]
// 3.	Броят процесори - цяло число в интервала [0…100]
// 4.	Броят рам памет - цяло число в интервала [0…100]

function shoppingList(input){
    let budget = Number(input[0]);
    let gpu = Number (input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);
    let disc=0;
   
    let gpuPrice = 250;
    let gpuTotal = gpuPrice * gpu
    let cpuPrice = gpuTotal - 0.65* gpuTotal;
    let ramPrice = gpuTotal - gpuTotal *0.90;
    
    let ramTotal = ramPrice*ram;
    let cpuTotal= cpuPrice*cpu;

    let totalPrice = gpuTotal+ramTotal+cpuTotal;
    let finalPrice=totalPrice - disc;
   
if(gpu>cpu){
    disc = totalPrice - 0.85*totalPrice;
    finalPrice = totalPrice-disc;
  }
        
 if(budget>totalPrice){
        
        let moneyLeft = budget - finalPrice; 
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    
    }else {
       let neededSum = finalPrice - budget   ;
        console.log(`Not enough money! You need ${neededSum.toFixed(2)} leva more!`);
    }

}

shoppingList (["920.45",
"2",
"4",
"2"])


