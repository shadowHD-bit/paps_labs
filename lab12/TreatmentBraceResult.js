const bad = require('./_badResult')
const good = require('./_goodResult')
const repeat = require('./_neddsRepeatResult')


class TreatmenrBruceResult{
    goodResultBruce(FI_user, FI_doctor){
        const goodRes = new good()
        console.log('\nЛечение "Установка и проверка Брекетов" :')
        console.log(goodRes.getResult(FI_user, FI_doctor))
    }

    badResultBruce(FI_user, FI_doctor){
        const badRes = new bad()
        console.log('\nЛечение "Установка и проверка Брекетов" :')
        console.log(badRes.getResult(FI_user, FI_doctor))
    }

    repeatResultBruce(FI_user, FI_doctor){
        const rep = new repeat()
        console.log('\nЛечение "Установка и проверка Брекетов" :')
        console.log(rep.getResult(FI_user, FI_doctor))
    }
}

module.exports = TreatmenrBruceResult