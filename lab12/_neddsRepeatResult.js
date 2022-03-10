class repeatResult{
    getResult(FI_user, FI_doctor){
        const res =(`Доктор ${FI_doctor} отслал резельтаты пациенту ${FI_user}... Первый сеанс лечения прошел. Необходимо записаться на следующий сеанс.`)
        return res
    }
}

module.exports = repeatResult