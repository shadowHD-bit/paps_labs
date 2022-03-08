class Appointment{
    constructor() {
        this.Appointments = []
    }

    createAppointments(User, data){
        const NameUser = User.getName()
        const LastNameUser = User.getLastName()

        console.log(`\nБыла создана заявка на запись к врачу для пользователя ${NameUser} ${LastNameUser}`)
        console.log(`Дата приема врача по созданной заявке - ${data}`)
        this.addToAppointmentsList(LastNameUser, NameUser, data)
    }

    addToAppointmentsList(last_name, name, data){
        this.Appointments.push([last_name + ' ' + name, data])
    }

    getAppointmentsList(){
        console.log(`\nСозданные заявки к врачу: `)
        return this.Appointments
    }
}

module.exports = Appointment