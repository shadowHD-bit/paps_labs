const AppointmentStatus = require('./AppointmentStatus')

class waitSendingStatusAppointmnet extends AppointmentStatus{
    constructor(){
        super('Заявка отправлена. Ожидание обработки менеджера...', managerProccessingStatusAppointment)
    }
}

class managerProccessingStatusAppointment extends AppointmentStatus{
    constructor(){
        super('Заявка на обработке у менеджера. Ожидайте ответа...', successfulStatusAppointment)
    }
}

class successfulStatusAppointment extends AppointmentStatus{
    constructor(){
        super('Ваша заявка обработана. Ждите звонка от менеджера для уточнения времени записи к врачу. Спасибо!', successfulStatusAppointment)
    }
}


module.exports = {
    waitSendingStatusAppointmnet,
    managerProccessingStatusAppointment,
    successfulStatusAppointment
}