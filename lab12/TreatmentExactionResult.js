const bad = require('./_badResult')
const good = require('./_goodResult')
const repeat = require('./_neddsRepeatResult')


class TreatmenrExactResult{
    goodResultExact(FI_user, FI_doctor){
        const goodd = new good()
        console.log('\nЛечение "Удаление зуба" :')
        console.log(goodd.getResult(FI_user, FI_doctor))
    }

    badResultExact(FI_user, FI_doctor){
        const badd = new bad()
        console.log('\nЛечение "Удаление зуба" :')
        console.log(badd.getResult(FI_user, FI_doctor))
    }

    repeatResultExact(FI_user, FI_doctor){
        const repeatt = new repeat()
        console.log('\nЛечение "Удаление зуба" :')
        console.log(repeatt.getResult(FI_user, FI_doctor))
    }
}

module.exports = TreatmenrExactResult