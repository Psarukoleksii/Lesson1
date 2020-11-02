// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль

// let obj = {
//     dog: {
//         name: 'Chappy',
//         old: 5,
//         color: 'white',
//         agresive: true,
//         live: 'atHome', 
//     },
//     people: {
//         name: 'Oleksii',
//         secondName: 'Psaruk',
//         old: 20,
//         live: 'inLviv',
//         study: 'owu',
//     },
//     car: {
//         country: 'Germany',
//         color: 'white',
//         producer: 'Mersedes',
//         type: 'universal',
//         comfortable: true,
//     }
// }
// console.log(obj);

// *************************

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// let obj = {
//     Будинок: {
//         поверх: 5,
//         кімнати: ['кухня', 'спальня', 'вітальня'],
//         колір: 'синій',
//         комфортність: true,
//         підвал: false,
//     },
//     Машина: {
//         Марка: 'Mersedes',
//         Модель: 'E-class',
//         Комфортність: true,
//         Комплектація: {
//             ПідігрівCидінь: true,
//             Масаж: true,
//             Шкіра: ['Біла', 'мягка'],
//             ТретійРядСидінь: true,
//         },
//     },
//     Сумка: {
//         Виготовлює: 'H&M',
//         Колір: 'Білий',
//         Матеріали: ['Шкіра', 'Замш'],
//         Розмір: 'Середній',
//         Комфортність: true,
//     },
    
// }
// console.log(obj);

// ******************************

// Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
//             ];
            
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - 1. статус Андрія

// for(let user of users){
//     if(user.name == 'andrey'){
//         console.log(user.status)
//     }
// }

// 2. Статус Максима

// for(let user of users){
//     if(user.name == 'max'){
//         console.log(user.status)
//     }
// }

// 3. Імя передостаннього обєкту

// console.log(users[9].name);

// 4. Імя третього обєкту

// console.log(users[2]['name']);

// 5. Вік Олега

// for(let user of users){
//     if(user.name == 'oleg'){
//         console.log(user.age);
//     }
// }

// 6. Вік Олі

// for(let user of users){
//     if(user.name == 'olya'){
//         console.log(user.age)
//     }
// }

// 7. Вік + імя пятого обєкта

// console.log(users[4]['name']);
// console.log(users[4]['age']);

// 8. Вік + статус Анни
// for(let user of users){
//     if(user.name == 'anya' ){
//         console.log(user['age']);
//         console.log(user['status']);
//     }
// }



// **************************************** DOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM*******************************************


// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// 1. отримує текст з параграфа з id "content"
// let elem = document.getElementById('content');
// console.log(elem);

// ***********

// 2. отримує текст з блоку з id "rules"

// let elem = document.getElementById('rules')
// console.log(elem);

// 3. замініть текст параграфа з id 'content' на будь-який інший

// let elem = document.getElementById('content');
// elem.innerText = 'Hello world!!!';

// 4. - замініть текст параграфа з id 'rules' на будь-який інший

// let elem = document.getElementById('rules');
// elem.innerText = 'Hello world!!';

// 5. - змініть кожному елементу колір фону на червоний

// let elem1 = document.getElementById('content');
// elem1.style.backgroundColor = 'red';
// let elem2 = document.getElementById('rules');
// elem2.style.backgroundColor = 'red';

// 6. - змініть кожному елементу колір тексту на синій

// let elem1 = document.getElementById('content');
// elem1.style.color = 'blue';
// let elem2 = document.getElementById('rules');
// elem2.style.color = 'blue';

// 7. - отримати весь список класів елемента з id=rules і вивести їх в console.log

// let elem = document.getElementById('rules');
// console.log(elem.className)

// 8. - отримати всі елементи з класом fc_rules

// let elem = document.getElementsByClassName('fc_rules');
// console.log(elem)

// 9. - поміняти колір тексту у всіх елементів fc_rules на червоний

// let elem1 = document.getElementsByClassName('fc_rules');

// for(let elem of elem1){
//     elem.style.color = 'blue';
// }


