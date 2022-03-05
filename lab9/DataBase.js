//Класс База данных с неполным функционалом, для демострации паттерна Одиночка
//Данный класс содержит конструктор класса База данных, в котором идет проверка на существующий инстанс класса. 
//То есть, если значение  DataBase.closeReconnection = true, то пользователь не может переподключаться к другой базе во время соединения с первой.

class DataBase{
    constructor(connection_IP_database){
        if(DataBase.closeReconnection) {
            return DataBase.connetctionIP
        }
        
        DataBase.closeReconnection = true
        DataBase.connetctionIP = this
        this.connection_IP_database = connection_IP_database
    }

    getIPconnetctionDB(){
        return this.connection_IP_database
    }
}

module.exports = DataBase