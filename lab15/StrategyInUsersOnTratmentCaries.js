//Скидка "Первое лечение" скидка 5%
function newTreatment(price){
    return price*0.95
}

//Скидка "Лечение сразу 3-х зубов" скидка 3%
function treatmentThreeTeeth(price){
    return price*0.97
}

//Скидка "Лечение сразу 4-х зубов" скидка 4%
function treatmentFourTeeth(price){
    return price*0.96
}

//Скидка "Лечение сразу 5-х зубов" скидка 5%
function treatmentFiveTeeth(price){
    return price*0.95
}

//Скидка "Лечение сразу 6-х зубов" скидка 6%
function treatmentSixTeeth(price){
    return price*0.94
}

//Скидка "Приведи друга" скидка 2%
function inviteFriend(price){
    return price*0.98
}

//Скидка "Семейное лечение" скидка 10%
function familyTreatment(price){
    return price*0.9
}

module.exports = {
    newTreatment,
    treatmentThreeTeeth,
    treatmentFourTeeth,
    treatmentFiveTeeth,
    treatmentSixTeeth,
    inviteFriend,
    familyTreatment

}
