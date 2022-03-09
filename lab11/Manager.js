class Manager{
    constructor(id, name, last_name, email, number_phone, date_birthday, number_INN, number_SalaryPayment, role){
        this.id = id
        this.name = name
        this.last_name = last_name
        this.email = email
        this.number_phone = number_phone
        this.date_birthday = date_birthday
        this.number_INN = number_INN
        this.number_SalaryPayment = number_SalaryPayment
        this.role = role
    }
}

module.exports = Manager