class User{
    constructor(name, last_name, email, pass, number_phone, date_birthday, role){
        this.name = name
        this.last_name = last_name
        this.email = email
        this.pass = pass
        this.number_phone = number_phone
        this.date_birthday = date_birthday
        this.role = role
    }

    getRoleUser(){
        return this.role
    }
}

module.exports = User