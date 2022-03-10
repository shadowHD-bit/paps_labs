const bad = require('./_badResult')
const good = require('./_goodResult')
const repeat = require('./_neddsRepeatResult')


class TreatmenrCariesResult{
    goodResultCaries(FI_user, FI_doctor){
        const goodRes = new good()
        console.log('\nЛечение "Лечение кариеса" :')
        console.log(goodRes.getResult(FI_user, FI_doctor))
    }

    badResultCaries(FI_user, FI_doctor){
        const badRes = new bad()
        console.log('\nЛечение "Лечение кариеса" :')
        console.log(badRes.getResult(FI_user, FI_doctor))
    }

    repeatResultCaries(FI_user, FI_doctor){
        const repeatRes = new repeat()
        console.log('\nЛечение "Лечение кариеса" :')
        console.log(repeatRes.getResult(FI_user, FI_doctor))
    }
}

module.exports = TreatmenrCariesResult