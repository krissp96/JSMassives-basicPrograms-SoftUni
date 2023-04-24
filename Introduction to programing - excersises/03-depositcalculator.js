

// сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)


function depositCalculator(input){
    let depositedSum = Number(input[0]);
    let depositPeriodMonths = Number(input[1]);
    let annualInterest = Number(input[2]);

    let annualInterestDecimal = annualInterest / 100;

    let finalSum = depositedSum + depositPeriodMonths * ((depositedSum*annualInterestDecimal)/12);
    console.log(finalSum);
    
}
depositCalculator(["200","3","5.7"])