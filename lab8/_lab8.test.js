const Appointment = require('./Appointment')
const User = require('./Users')


//Module Tests
describe('Simple Test Appointment Class:', () => {

    let testAppointment
    let testUserId
    let testUser

    beforeEach(() => {
        testUserId = 'dsv84sdv17sdv488dv477dv4';
        testUser = new User(testUserId, 'Alex', 'Family', 'test@test.com', '89005002020', '01.01.2000')
        testAppointment = new Appointment(1, testUserId, new Date(Date.now))
    })

    //Test 1. Проверка возвращаемого введеного значения id_user
    test('should check return user id', () => {
        expect(testAppointment.getPersonalDataClient()).toBe(testUserId)
    });

    //Test 2. Проверка возвращаемого введеного значения id_date на соответствие типу Date
    test('should check return user id', () => {
        expect(testAppointment. getDateAppointment()).toBeInstanceOf(Date)
    });

    //Test 3. Тест, проверяющий, что метод действительно возбуждает исключение определённого типа при возникновении исключительной ситуации;
    test("Test check for type exceptions", () => {

        //В id_appointment указад индетификатор в формате строки, а необходимо указывать в формате числа
        let testAppointmentTwo = new Appointment('sdvdv', testUserId, new Date(Date.now))

        const checkedTypeIdAppointment = () => {
            if(typeof testAppointmentTwo.id_appointment != 'number'){
                throw new TypeError();
            }
        };

        expect(checkedTypeIdAppointment).toThrow(TypeError);
    });

    //Тест 4. Тест, проверяющий возвращаемое значение, являющееся коллекцией;
    test('should check return collection type', () => {
        expect(testUser.createCollectionUserParametrs()).toBeInstanceOf(Set);
    });

    //Test 5. Тест для метода, не возвращающего значение (void)
    test('should checked non return func', () => {

        let logSpy
        //degree: light, normal, hard
        function costTreatmentCaries(numberofTeeth, degree){
            let totalCost
            let dump

            if(degree == 'light'){
                dump = 1.1
            }
            if(degree == 'normal'){
                dump = 1.5
            }
            if(degree == 'hard'){
                dump = 1.8
            }

            totalCost = Math.trunc(3000*dump*numberofTeeth)
            console.log = jest.fn();
            
            if(totalCost > 0 && totalCost< 5000){
                 logSpy = jest.spyOn(console, 'log');
                console.log('Не дорого')
            }
            if(totalCost > 5001 && totalCost< 15000){
                 logSpy = jest.spyOn(console, 'log');
                console.log('Нормально')
            }
            if(totalCost > 15001){
                 logSpy = jest.spyOn(console, 'log');
                console.log('Дорого')
            }
            
        }
        costTreatmentCaries(2, 'light')
        expect(logSpy).toHaveBeenCalledWith('Нормально');


    });

    //Test 6. Тест, использующий mock-объект.
    test('should be use mock object', () => {

        function map(array, mock_callback) {
            const result = []
            for (let i = 0; i< array.length; i++){
                result.push(mock_callback(array[i]))
            }
            return result
        }
        

        let array = [1,2,3,5]
        let fn = jest.fn(x => x ** 2)
        map(array, fn)


        //Проверка на вызов мок-функции и количество вызовов
        expect(fn).toBeCalled()
        expect(fn).toBeCalledTimes(4)
    
        //Проверка на длину вызова
        expect(fn.mock.calls.length).toBe(4)
        
        //Проверка на выполнение мок-функции
        expect(fn.mock.results[0].value).toBe(1)
        expect(fn.mock.results[1].value).toBe(4)
        expect(fn.mock.results[2].value).toBe(9)
        expect(fn.mock.results[3].value).toBe(25)
        
        //Демонстрации функции присваивания значении мок функции
        fn
            .mockReturnValueOnce(100)
            .mockReturnValueOnce(200)
            .mockReturnValue('42')
    
        expect(fn()).toBe(100)
        expect(fn()).toBe(200)
        expect(fn()).toBe('42')

    });

})