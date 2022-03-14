class AccessAdminPanel{
    constructor(User){
        this.User = User
    }

    checkRoleAccess(role){
        return role === 'ADMIN'
    }

    openAdminPanel(){
        if(this.checkRoleAccess(this.User.role)){
            console.log(`${this.User.name} ${this.User.last_name} ваш статус - ${this.User.role}... Войдите в админ-панель!`)
        }
        else{
            console.log(`${this.User.name} ${this.User.last_name} ваш статус - ${this.User.role}... У вас нет доступа!`)
        }
    }
}

module.exports = AccessAdminPanel