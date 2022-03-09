/* Фабричный метод — это порождающий паттерн проектирования, который определяет общий интерфейс для создания объектов в суперклассе, позволяя подклассам изменять тип создаваемых объектов.

Паттерн Фабричный метод предлагает создавать объекты не напрямую, используя оператор new, а через вызов особого фабричного метода. 
Не пугайтесь, объекты всё равно будут создаваться при помощи new, но делать это будет фабричный метод.

На первый взгляд, это может показаться бессмысленным: мы просто переместили вызов конструктора из одного конца программы в другой. Но теперь вы сможете переопределить фабричный метод в подклассе, чтобы изменить тип создаваемого продукта.

Чтобы эта система заработала, все возвращаемые объекты должны иметь общий интерфейс. Подклассы смогут производить объекты различных классов, следующих одному и тому же интерфейсу.

*/

const CreateAccountClass = require('./CreateAccount')

const Create = new CreateAccountClass()

const UserFirst = Create.ceateAccountSimpleUser('Alexandr', 'Ivanov', 'test@mail.ru', '88009509663', '05.04.2000')
const UserSecond = Create.ceateAccountSimpleUser('Alexey', 'Petrov', 'testSecond@mail.ru', '89566032154', '25.11.2005')
const UserThird = Create.ceateAccountSimpleUser('Vladimir', 'Volkov', 'testThird@mail.ru', '89089560147', '07.01.1988')

const DoctorFirst = Create.ceateAccountDoctor('Evgeny', 'Izmailov', 'izmail@gmail.com', '89996541235', '04.05.1978', '816512365478', '2600 1542 1234 1234', 'Dentist')
const DoctorSecond = Create.ceateAccountDoctor('Alexey', 'Trivilov', 'tri@gmail.com', '89564125632', '17.12.1985', '784521587456', '2600 1234 1234 1234', 'Junior Dentist')

const Manager = Create.ceateAccountManager('Olga', 'Izmailova', 'o.Izmail@gmail.com', '89541256321', '14.06.1985', '458963214587', '2600 5678 5678 5678', 'Advanced Manager')



console.log(Create.getLog())