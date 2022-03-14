class AppointmentStatus{
    constructor(nameStatus, nextStatus){
        this.nameStatus = nameStatus
        this.nextStatus = nextStatus
    }

    upNextStatus(){
        return new this.nextStatus
    }
}

module.exports = AppointmentStatus