class User{
    constructor(name, lastname, appointments){
        this.name = name
        this.lastname = lastname

        this.appointments = appointments
    }

    getFIO(){
        return (this.name, this.lastname)
    }

    getName(){
        return this.name
    }

    getLastName(){
        return this.lastname
    }


    makeAppointments(){
        this.appointments.createAppointments(this, new Date(Date.now()))
    }
}

module.exports = User