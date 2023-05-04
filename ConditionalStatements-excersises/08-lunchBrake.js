// По време на обедната почивка искате да изгледате епизод от своя любим сериал. Вашата 
// задача е да напишете програма, с която ще разберете дали имате достатъчно време да изгледате 
// епизода. По време на почивката отделяте време за обяд и време за отдих. Времето за обяд ще бъде 1/8
//  от времето за почивка, а времето за отдих ще бъде 1/4 от времето за почивка. 
// Вход
// От конзолата се четат 3 реда:
// 1.	Име на сериал – текст
// 2.	Продължителност на епизод  – цяло число в диапазона [10… 90]
// 3.	Продължителност на почивката  – цяло число в диапазона [10… 120]


function lunchBrake (input){
    let movieTitle = input[0];
    let episodeDuration = Number(input[1]);
    let brakeDuration = Number(input[2]);

    let lunchDuration = (1/8)*brakeDuration;
    let leisureDuration = (1/4)*brakeDuration
    
    let timeTaken = lunchDuration + leisureDuration;
    let timeLeft = brakeDuration - timeTaken;

    if(timeLeft>=episodeDuration){
        let timeAfterMovieLeft = timeLeft - episodeDuration;
        console.log(`You have enough time to watch ${movieTitle} and left with ${Math.ceil(timeAfterMovieLeft)} minutes free time.`);
    }else {
        let timeNeeded = episodeDuration - timeLeft;
        console.log(`You don't have enough time to watch ${movieTitle}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }

}

lunchBrake(["Teen Wolf",
"48",
"60"])
;
