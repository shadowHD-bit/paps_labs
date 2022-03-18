


//Ex1

console.log('\nПример 1. Проверка входа в админ-панель, используя паттерн Прокси:')

const UserClass = require('./User')
const AccessClass =  require('./AccessAdminPanel')

const UserFirst = new UserClass('Alexandr', 'Ivanov', 'test@mail.ru', 'testPass', '88009509663', '05.04.2000', 'USER')
const UserSecond = new UserClass('Alexey', 'Petrov', 'testSecond@mail.ru', 'testPass', '89566032154', '25.11.2005', 'DOCTOR')
const UserThird = new UserClass('Vladimir', 'Volkov', 'testThird@mail.ru', 'testPass', '89089560147', '07.01.1988', 'ADMIN')

const accessFirst = new AccessClass(UserFirst).openAdminPanel()
const accessSecond = new AccessClass(UserSecond).openAdminPanel()
const accessThird = new AccessClass(UserThird).openAdminPanel()


//Ex2

console.log('\nПример 2. Проверка введенных данных, используя паттерн Прокси:')
const Validator = require('./ValidRegistration')

const newUser = new Validator(new UserClass('Alexandr', 'Ivanov', 'test@mail.ru', 'dsOvfgv1', '88009509663', '05.04.2000', 'USER')).mainValidCheck()
