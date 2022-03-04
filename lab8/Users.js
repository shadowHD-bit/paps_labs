//Несколько простых функций для класса User, для проверки возвращаемого значеиня

class Users{

    constructor(id_user, name, last_name, email, phone_number, date_birthday) {
        this.id_user = id_user;
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.phone_number = phone_number;
        this.date_birthday = date_birthday;
    }

    createAppointment(Appointment_name, id_appointment){
        Appointment_name = new Appointment(id_appointment, id_user, new Date(Date.now))
    }

    createCollectionUserParametrs(){
        let collectionSetUser = new Set()
        collectionSetUser.add(this.id_user)
        collectionSetUser.add(this.name)
        collectionSetUser.add(this.last_name)
        collectionSetUser.add(this.email)
        collectionSetUser.add(this.phone_number)
        collectionSetUser.add(this.date_birthday)

        return collectionSetUser
    }

    
}


module.exports = Users;