class ValidRegistration{
    constructor(User){
        this.User = User
    }

    mainValidCheck(){
        if(this.validNull() && this.validPass()){
            console.log(`Пользователь ${this.User.name} ${this.User.last_name} добавлен!`)
        }
        if(!this.validNull() && this.validPass()){
            console.log(`Пользователь ${this.User.name} ${this.User.last_name} не добавлен! Заполните все поля!`)
        }
        if(this.validNull() && !this.validPass()){
            console.log(`Пользователь ${this.User.name} ${this.User.last_name} не добавлен! Пароль должен содержать от 6 до 20 символов и содержать только латинские символы, минимум одну заглавную и одну строчную букву и минимум одну цифру!`)
        }
        if(!this.validNull() && !this.validPass()){
            console.log(`Пользователь ${this.User.name} ${this.User.last_name} не добавлен! Проверьте данные!`)
        }
    }

    validPass(){
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(this.User.pass)
    }
    validNull(){
        if(this.User.name != '' && this.User.last_name != '' && this.User.email != '' && this.User.number_phone != '' && this.User.date_birthday != '' && this.User.role ){
            return true
        }
        else{
            return false
        }
    }
}

module.exports = ValidRegistration