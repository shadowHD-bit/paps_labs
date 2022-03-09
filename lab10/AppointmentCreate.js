const Appointment = require('./Appointment')

class AppointmentCreate{
    constructor() {
        this.Appointments = []
        this.count = 0
    }
    

    createAppointments(User, data){
        const NameUser = User.getName()
        const LastNameUser = User.getLastName()
        this.count++
        const Appointmentuser = new Appointment(this.count)
        console.log(`\nБыла создана заявка на запись к врачу для пользователя ${NameUser} ${LastNameUser}`)
        console.log(`Дата приема врача по созданной заявке - ${data}`)
        this.addToAppointmentsList(Appointmentuser.getNumberAppointment(), LastNameUser, NameUser, data)
    }

    addToAppointmentsList(number, last_name, name, data){
        this.Appointments.push([number ,last_name + ' ' + name, data])
    }

    getAppointmentsList(){
        console.log(`\nСозданные заявки к врачу: `)
        return this.Appointments
    }
}

module.exports = AppointmentCreate