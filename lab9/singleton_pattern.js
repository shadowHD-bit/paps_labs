/*Одиночка — это порождающий паттерн проектирования, который гарантирует, что у класса есть только один экземпляр, и предоставляет к нему глобальную точку доступа.*/

/*Одиночка решает сразу две проблемы, нарушая принцип единственной ответственности класса.

1) Гарантирует наличие единственного экземпляра класса. Чаще всего это полезно для доступа к какому-то общему ресурсу, например, базе данных.

2) Глобальный доступ к одному объекту
Клиенты могут не подозревать, что работают с одним и тем же объектом.

Но есть и другой нюанс. Неплохо бы хранить в одном месте и код, который решает проблему №1, а также иметь к нему простой и доступный интерфейс.*/


//Ex 1. Пример использования паттерна одиночка при подключение к бд

console.log('\nEx 1:')
const TestHospitalDB = require('./DataBase')

console.log('При попытке подключиться к бд с ip 192.168.0.1 в первый раз:')
const TestIPAdreesOne = new TestHospitalDB('192.111.0.1')
console.log(TestIPAdreesOne.getIPconnetctionDB())


console.log('\nПри попытке подключиться к бд с ip 171.115.21.9 во второй раз:')
const TestIPAdreesTwo = new TestHospitalDB('171.115.21.9')
console.log(TestIPAdreesTwo.getIPconnetctionDB())

//Ex 2. Пример использования паттерна одиночка при выставлении лайков коментариию

console.log('\nEx 2:')
const TestComments = require('./Comment')

const TestMainComment = new TestComments(0)

const User1 = new TestComments(0)
const User2 = new TestComments(0)

User1.addCountLikesComment()//+1
User1.addCountLikesComment()//+1
User2.addCountLikesComment()//+1
User1.addCountLikesComment()//+1
User1.removeCountLikesComment()//-1
User1.addCountLikesComment()//+1
User2.addCountLikesComment()//+1 => +5 лайков

console.log('\nЕсли первый пользователь просматривает количество лайков у комментария:')
console.log(User1.getCountLikesComment())
console.log('\nЕсли второй пользователь просматривает количество лайков у комментария:')
console.log(User2.getCountLikesComment())