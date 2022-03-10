const DoctorClass = require('./TreatmentResultDoctor')


const Doctor = new DoctorClass

//good, bad, repeat

Doctor.treatmentCaries('good', 'Иванов Андрей', 'Толстов Олег')
Doctor.treatmentExact('bad', 'Иванов Андрей', 'Толстова Дарья')
Doctor.treatmentCaries('repeat', 'Иванов Андрей', 'Алексеев Егор')
Doctor.treatmentBrace('good', 'Иванов Андрей', 'Валова Дарья')
Doctor.treatmentBrace('bad', 'Иванов Андрей', 'Петров Александр')