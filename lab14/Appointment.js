const {waitSendingStatusAppointmnet} = require('./allStatusAppointment')

class Appointment {
    constructor(id_appointment){
        this.date_appointment = new Date(Date.now());
        this.id_appointment = id_appointment;
        this.statusAppointment = new waitSendingStatusAppointmnet()
    }

    nextStatus(){
        this.statusAppointment = this.statusAppointment.upNextStatus()
    }

    getStatusAppoinment(){
        return this.statusAppointment.nameStatus
    }
}

module.exports = Appointment