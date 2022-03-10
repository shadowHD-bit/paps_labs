class goodResult{
    getResult(FI_user, FI_doctor){
        const res = `Доктор ${FI_doctor} отслал резельтаты пациенту ${FI_user}... Зубы хорошие, необходим один сеанс лечения.`
        return res
    }
}

module.exports = goodResult