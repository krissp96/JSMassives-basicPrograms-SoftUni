function studyMaterials(input){
 

    let packsPens = Number(input[0]*5.8);
    let packsMarker = Number(input[1]*7.2);
    let litersCleanChem = Number(input[2]*1.2);
    let discountPercent = Number(input[3]/100);

    let neededSum = packsMarker+packsPens+litersCleanChem ;
    let totalSum = neededSum - (neededSum*discountPercent);

    console.log(totalSum);

}
studyMaterials(["2","3","4","25"])