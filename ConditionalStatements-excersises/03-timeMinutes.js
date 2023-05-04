function timeMinutes(input){
let inititalHours = Number(input[0]);
let initialMinutes = Number(input[1]);

let totalMins = inititalHours * 60 + initialMinutes +15; 

let hour = Math.floor(totalMins/60);
let mins= totalMins%60;

if(hour === 24){
    hour = 0;
}

if(mins<10){
    console.log(`${hour}:0${mins}`);
}else {
    console.log(`${hour}:${mins}`);
}

}

timeMinutes (["23","48"])