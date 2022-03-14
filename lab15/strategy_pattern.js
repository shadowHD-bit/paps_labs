//Паттерн опредяляет схожие алгоритмы и помещяет из в каждый отдельный класс.

//При расширении возможностей программы

const CountPriceTreatmentTeethClass = require('./CountPriceClass')
const { familyTreatment, inviteFriend, treatmentSixTeeth, newTreatment } = require('./StrategyInUsersOnTratmentCaries')

const Family1 = new CountPriceTreatmentTeethClass(familyTreatment)
const Friends1 = new CountPriceTreatmentTeethClass(inviteFriend)
const Treatment_6_Teeth1 = new CountPriceTreatmentTeethClass(treatmentSixTeeth)
const NewClient1 = new CountPriceTreatmentTeethClass(newTreatment)


Family1.setPrice(21000)
console.log(`\nСтоимость лечения для данной семью составит: `+ Family1.checkNowPrice() +` рублей`)

Friends1.setPrice(21000)
console.log(`\nСтоимость лечения для данных друзей составит: `+ Friends1.checkNowPrice() +` рублей`)

Treatment_6_Teeth1.setPrice(21000)
console.log(`\nСтоимость лечения 6 зубов для данного клиента составит: `+ Treatment_6_Teeth1.checkNowPrice() +` рублей`)

NewClient1.setPrice(21000)
console.log(`\nСтоимость лечения для Нового клиента составит: `+ NewClient1.checkNowPrice() +` рублей\n`)

