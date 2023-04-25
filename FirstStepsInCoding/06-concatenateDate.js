// function concatenateData(input) {
//     let name = (input[0]);
//     let surname = (input[1]);
//     let age = Number(input[2]);
//     let city = (input[3]);


//     console.log("You are",name,surname,",a",age,"years old person from",city,".");
// }
// concatenateData(["Kristiyan", "Petrov", "20", "Sonderborg"])


// //  console.log(`You are ${name} ${surname}, a ${age} old person from ${city}.`);

function concatenateData([name, lastName, age, town]) {
   console.log(`You are ${name} ${lastName}, a ${age}-years old person from ${town}.`)
}

concatenateData()