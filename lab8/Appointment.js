//Класс заявка
class Appointment{

    constructor(id_appointment, id_user, date_appointment) {
        this.id_user = id_user;
        this.date_appointment = date_appointment;
        this.id_appointment = id_appointment;
    }

    getPersonalDataClient(){
        return this.id_user;
    }

    getDateAppointment(){
        return this.date_appointment;
    }

    checkedTypeIdAppointment = () => {
        if(typeof this.id_appointment != 'number'){
            throw new TypeError();
        }
    };

}


module.exports = Appointment;