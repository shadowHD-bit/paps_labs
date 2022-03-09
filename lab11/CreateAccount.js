const UserClass = require('./User')
const DoctorClass = require('./Doctor')
const ManagerClass = require('./Manager')


class CreateAccount{
    constructor(){
        this.count_id = 0
        this.ListCreatedAccount = []
    }
    
    ceateAccountSimpleUser(name, last_name, email, number_phone, date_birthday){
        this.count_id++
        const newUser = new UserClass(this.count_id, name, last_name, email, number_phone, date_birthday, 'User')
        const UserData = [this.count_id, name, last_name, email, number_phone, date_birthday, 'User']
        this.addLogAccauntCreated(UserData)
        return newUser

    }

    ceateAccountDoctor(name, last_name, email, number_phone, date_birthday, number_INN, number_SalaryPayment, specialize){
        this.count_id++
        const newDoctor = new DoctorClass(this.count_id, name, last_name, email, number_phone, date_birthday, number_INN, number_SalaryPayment, specialize, 'Doctor')
        const DoctorData = [this.count_id, name, last_name, email, number_phone, date_birthday, number_INN, number_SalaryPayment, specialize, 'Doctor']
        this.addLogAccauntCreated(DoctorData)
        return newDoctor
    }

    ceateAccountManager(name, last_name, email, number_phone, date_birthday, number_INN, number_SalaryPayment){
        this.count_id++
        const newManager =  new ManagerClass(this.count_id, name, last_name, email, number_phone, date_birthday, number_INN, number_SalaryPayment, 'Manager')
        const ManagerData = [this.count_id, name, last_name, email, number_phone, date_birthday, number_INN, number_SalaryPayment, 'Manager']
        this.addLogAccauntCreated(ManagerData)
        return newManager
    }

    addLogAccauntCreated(data_account){
        this.ListCreatedAccount.push(data_account)
        console.log(`Создан новый пользователь системы с данными: ${data_account}`)
    }

    getLog(){
        console.log('\nСписок зарегистрировавшихся пользователей:')
        return this.ListCreatedAccount
    }
}

module.exports = CreateAccount