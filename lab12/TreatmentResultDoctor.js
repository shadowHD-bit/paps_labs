const CariesResult = require('./TreatmentCariesResult')
const BraceResult = require('./TreatmentBraceResult')
const ExactResult = require('./TreatmentExactionResult')


class TreatmentResult{

    treatmentCaries(name_tretment, name_docrot, name_user){

        const Caries = new CariesResult()

        if(name_tretment == 'good'){
            Caries.goodResultCaries(name_user, name_docrot)
        }
        if(name_tretment == 'bad'){
            Caries.badResultCaries(name_user, name_docrot)
        }
        if(name_tretment == 'repeat'){
            Caries.repeatResultCaries(name_user, name_docrot)
        }
    }

    treatmentExact(name_tretment, name_docrot, name_user){

        const Exact = new ExactResult()

        if(name_tretment == 'good'){
            return Exact.goodResultExact(name_user, name_docrot)
        }
        if(name_tretment == 'bad'){
            return Exact.badResultExact(name_user, name_docrot)
        }
        if(name_tretment == 'repeat'){
            return Exact.repeatResultExact(name_user, name_docrot)
        }
    }

    treatmentBrace(name_tretment, name_docrot, name_user){

        const Brace = new BraceResult()

        if(name_tretment == 'good'){
            return Brace.goodResultBruce(name_user, name_docrot)
        }
        if(name_tretment == 'bad'){
            return Brace.badResultBruce(name_user, name_docrot)
        }
        if(name_tretment == 'repeat'){
            return Brace.repeatResultBruce(name_user, name_docrot)
        }
    }
}

module.exports = TreatmentResult