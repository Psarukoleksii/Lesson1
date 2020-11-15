// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку
// исчезал элемент с id="text".

// let elem = document.querySelector('#text');
// let button = document.querySelector('#button');
//
// button.addEventListener('click', function (){
//     elem.style.display = 'none';
// })

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.querySelector('#button');
// button.addEventListener('click', function (){
//     button.style.display = 'none';
// })

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let text = document.querySelector('#text');
// let button = document.querySelector('#button');
//
// button.addEventListener('click', () => { text.value >= 18? console.log(true) : console.log(false)});

// let text = document.querySelector('#text');
// let button = document.querySelector('#button');
//
// button.addEventListener('click', () => {
//     text.classList.toggle('active');
// })

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// let body = document.querySelector('body')
// let elems = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti1'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti2'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti3'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti4'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti5'},
// ];

// for(let elem of elems){
//     let div = document.createElement('div');
//     // div.innerHTML = `${elem.title}  ${elem.body}`;
//     let p1 = document.createElement('p');
//     let p2 = document.createElement('p');
//     p1.innerHTML = `${elem.title}`;
//     p2.innerHTML = `${elem.body}`;
//     div.appendChild(p1);
//     div.appendChild(p2);
//     div.style.backgroundColor = 'darkolivegreen';
//     div.style.margin = '30px';
//     div.style.color = 'white';
//     div.style.padding = '20px';
//     body.appendChild(div);


//     let button = document.createElement('button');
//     button.style.padding = '20px';
//     button.addEventListener('click', function(){
//         p2.style.display = 'none';
//     })


//     div.appendChild(button);
// }

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let button = document.querySelector('#input5');
// let elem1 = document.Form1.input1;
// let elem2 = document.Form1.input2;
// let elem3 = document.Form2.input3;
// let elem4 = document.Form2.input4;
//
//
// button.addEventListener('click', function (){
//     console.log(elem1.value);
// })


// *****************************************

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// function func(n, m, elem){
//     let table = document.querySelector(elem);
//
//     for (let i = 0; i < n; i++) {
//         let tr = document.createElement('tr');
//
//         for (let j = 0; j < m; j++) {
//             let td = document.createElement('td');
//             td.style.border = '1px solid black';
//             td.style.width = '200px';
//             td.style.height = '50px';
//             td.classList.add('forTd')
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
// }
// func(6, 6, '#emptyTable');

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання).


// let n = document.querySelector('#text1');
// let m = document.querySelector('#text2');
// let text = document.querySelector('#text3');
// let button = document.querySelector('#button');
//
// button.addEventListener('click', function (){
//     let table = document.querySelector('#emptyTable');
//
//     for (let i = 0; i < n.value; i++) {
//         let tr = document.createElement('tr');
//
//         for (let j = 0; j < m.value; j++) {
//             let td = document.createElement('td');
//             td.innerHTML = text.value;
//             td.style.border = '1px solid black';
//             td.style.width = '200px';
//             td.style.height = '50px';
//             td.classList.add('forTd')
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
// })

// *****************************************************

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let img1 = document.querySelector('#img1');
// let img2 = document.querySelector('#img2');
// let img3 = document.querySelector('#img3');
// let img4 = document.querySelector('#img4');
// let img5 = document.querySelector('#img5');
// let img6 = document.querySelector('#img6');
// let img7 = document.querySelector('#img7');
// let img8 = document.querySelector('#img8');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
//
//
// button1.addEventListener('click', function (){
//     img1.classList.add('notActive');
//     img5.classList.remove('notActive')
//     img5.classList.add('active');
//     img2.classList.add('notActive');
//     img6.classList.remove('notActive');
//     img6.classList.add('active');
// })
//
// button2.addEventListener('click', function (){
//     img4.classList.add('notActive');
//     img7.classList.remove('notActive')
//     img7.classList.add('active');
//     img3.classList.add('notActive');
//     img8.classList.remove('notActive');
//     img8.classList.add('active');
// })

// ****************************************************

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let arr = [
//     'сука',
//     'блядь',
//     'нахуй',
//     'єбать',
//     'хуй',
//     'пизда',
//     'піздєц',
//     'жопа',
//     'пиздарики',
// ]
//
// let elem1 = document.querySelector('#elem');
// let button = document.querySelector('#button');
//
// button.addEventListener('click', function (){
//     for(let elem of arr){
//         if(elem1.value === elem){
//             alert('Воу, полегше');
//         }
//     }
// })

// *************************************************

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let arr = [
//     'сука',
//     'блядь',
//     'нахуй',
//     'єбать',
//     'хуй',
//     'пизда',
//     'піздєц',
//     'жопа',
//     'пиздарики',
// ]
//
// let elem1 = document.querySelector('#elem');
// let button = document.querySelector('#button');
//
// button.addEventListener('click', function (){
//     let str = elem1.value;
//     let arr2 = str.split(' ');
//     for(let elem of arr){
//         for(elem2 of arr2){
//             if(elem === elem2){
//                 alert('Воу!');
//             }
//         }
//     }
// })

// *************************************************

// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
//
// let div = document.querySelector('#text');
//
// let elem1 = document.querySelector('#check1');
// let elem2 = document.querySelector('#check2');
// let elem3 = document.querySelector('#check3');
// let user;
// elem1.addEventListener('click', function (){
//     user = usersWithAddress.filter(function (elem){
//         if(elem.status === false) {
//             let p = document.createElement('p');
//             p.innerText = `${elem.name} ${elem.age} ${elem.status} ${elem.address.city} ${elem.address.street}`
//             div.appendChild(p);
//         }
//     })
// })
// elem2.addEventListener('click', function (){
//     user = usersWithAddress.filter(function (elem){
//         if(elem.age >= 29){
//             let p = document.createElement('p');
//             p.innerText = `${elem.name} ${elem.age} ${elem.status} ${elem.address.city} ${elem.address.street}`
//             div.appendChild(p);
//         }
//     })
// })
// elem3.addEventListener('click', function (){
//     user = usersWithAddress.filter(function (elem){
//         if(elem.address.city === 'Kyiv'){
//             let p = document.createElement('p');
//             p.innerText = `${elem.name} ${elem.age} ${elem.status} ${elem.address.city} ${elem.address.street}`
//             div.appendChild(p);
//         }
//     })
// })



