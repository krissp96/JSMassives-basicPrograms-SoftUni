// 1.	Дължина в см – цяло число в интервала [10 … 500]
// 2.	Широчина в см – цяло число в интервала [10 … 300]
// 3.	Височина в см – цяло число в интервала [10… 200]
// 4.	Процент  – реално число в интервала[0.000 … 100.000]
// обем на аквариумa: 85 * 75 * 47 = 299625 см3
// обем в литри: 299625 * 0.001 или  299625 / 1000 => 299.625 литра
// заето пространство: 17% = 0.17
// нужни литри: 299.625 * (1 - 0.17) = 248.68875 литра



function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3] / 100)
    
    let mass = lenght * width * height;
    let liters = mass / 1000;
    let neededLitres = liters * (1 - percent);
    
    console.log(neededLitres);
}
fishTank(["85 ","75 ","47 ","17"])
