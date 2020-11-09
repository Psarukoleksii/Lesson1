// -  Створити клас для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту

// class tags {
//     constructor(name, whatDo, nameAtr, whatDo1, nameAtr2 = null, whatDo2 = null){
//         this.name = name;
//         this.whatDo = whatDo;
//         this.atributs = [{titleAtr: nameAtr, wthDo: whatDo1}, {titleAtr: nameAtr2, wthDo: whatDo2}]
//     }
// }

// let link = new tags('ссилка', 'Переходить на іншу сторінку', 'href', 'дає адресу куди переходити', 'title','підказка')
// console.log(link);

// let div = new tags('блок', 'створює окремий блок для інформації', 'align', 'Вирівнювання', 'title', 'Вспливаюча підказка')
// console.log(div);

// let h1 = new tags('заголовок першого рівня', 'створює найголовніший заголовок', 'align','Вирівнювання заголовку');
// console.log(h1)

// let span = new tags('спан', 'оприділяє строчні елементи','style','задає стиль елементу');
// console.log(span);

// let input = new tags('інпут', 'створює деякі елементи інтерфейсу','submit','утворює кнопку');
// console.log(input);

// let form = new tags('форм', 'встановлює форму на веб-сторінці','medhod','метод протоколу даних', 'action', 'документ, який обробляє форму');
// console.log(form);



// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

// function Tags(name, whatDo, nameAtr, whatDo1, nameAtr2 = null, whatDo2 = null){
//     this.name = name;
//     this.whatDo = whatDo;
//     this.atributs = this.atributs = [{titleAtr: nameAtr, wthDo: whatDo1}, {titleAtr: nameAtr2, wthDo: whatDo2}]
// }

// let link = new Tags('ссилка', 'Переходить на іншу сторінку', 'href', 'дає адресу куди переходити', 'title','підказка')
// console.log(link);

// let div = new tags('блок', 'створює окремий блок для інформації', 'align', 'Вирівнювання', 'title', 'Вспливаюча підказка')
// console.log(div);

// let h1 = new tags('заголовок першого рівня', 'створює найголовніший заголовок', 'align','Вирівнювання заголовку');
// console.log(h1)

// let span = new tags('спан', 'оприділяє строчні елементи','style','задає стиль елементу');
// console.log(span);

// let input = new tags('інпут', 'створює деякі елементи інтерфейсу','submit','утворює кнопку');
// console.log(input);

// let form = new tags('форм', 'встановлює форму на веб-сторінці','medhod','метод протоколу даних', 'action', 'документ, який обробляє форму');
// console.log(form);




// ============================================================================================================================================

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(driver) {
//     this.model = 'audi';
//     this.old = '2years';
//     this.producer = 'germany';
//     this.maxSpeed = '200';
//     this.volume = "3 liters";
//     this.increaseMaxSpeed = '40';
    // this.drive = function (){
    //     console.log('Їдемо зі швидкістю ' + this.maxSpeed + ' на годину');
    // };
    // this.increaseSpeed = function (){
    //     console.log(+this.maxSpeed + +this.increaseMaxSpeed);
    // }
    // this.newValue = newValue;
    // this.changeYear = function() {
    //     console.log(+this.old + +this.newValue);
    // }
    // this.driver = driver;
// }

// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// let speed = new car('200');
// speed.drive();

// -- info () - яка виводить всю інформацію про автомобіль
// let inform = new Car('audi', '2 years', 'germany', '200', '3 liters');
// console.log(inform)

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// let speed = new Car('200', '40');
// speed.increaseSpeed();

// -- changeYear (newValue) - змінює рік випуску на значення newValue
// let year = new Car(15, 3);
// year.changeYear();

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// let driver = new Car({name: 'andrii', old: 25, expr: '5 years'});
// console.log(driver);

// *************************************************************************************************

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let Car = {
//     model: 'audi',
//     old: 2010,
//     producer: 'germany',
//     maxSpeed: 200,
//     volume: 3,

//     drive: function(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     },
//     info: function(){
//         console.log(Car);
//     },
//     increaseMaxSpeed: function(){
//         console.log(this.maxSpeed + 30);
//     },
//     changeYear: function(){
//         console.log(`новий рік випуску: ${this.old + 30}`);
//     },
//     addDriver: function(){
//         console.log({name: 'andrii', old: 25, expr: '5 years'})
//     }
// }

// Car.drive();
// Car.info();
// Car.increaseMaxSpeed();
// Car.changeYear();
// Car.addDriver();



// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class prints{
//     constructor(namePrints, agePrints, sizePrints){
//         this.namePrints = namePrints;
//         this.agePrints = agePrints;
//         this.sizePrints = sizePrints;
//     }
// }
// let prin = new prints('oleksii', 20, 37);

// class girls{
//     constructor(name, age, size){
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
//     married(){
//         if(this.size === prin.sizePrints){
//             console.log(this);
//         }
//     }
// }
// let girl1 = new girls('anya', 18, 38)
// girl1.married()
// let girl2 = new girls('katya', 20, 35);
// girl2.married();
// let girl3 = new girls('masha', 25, 37);
// girl3.married();
// let girl4 = new girls('vika', 17, 36);
// girl4.married();
// let girl5 = new girls('olya', 30, 34);
// girl5.married();

// function prints (namePrints, agePrints, sizePrints){
//     this.namePrints = namePrints;
//     this.agePrints = agePrints;
//     this.sizePrints = sizePrints;
// }