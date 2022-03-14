const AppointmentClass = require('./Appointment')

const FirstAppointment = new AppointmentClass(1)
console.log('\n'+FirstAppointment.getStatusAppoinment())


//Пеоеходим в следующее состояние
FirstAppointment.nextStatus()

console.log('\n'+FirstAppointment.getStatusAppoinment())

//Пеоеходим в конечное состояние
FirstAppointment.nextStatus()

console.log('\n'+FirstAppointment.getStatusAppoinment()+'\n')