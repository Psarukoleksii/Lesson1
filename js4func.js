// - створити функцію яка виводить масив

// function func(arr){
//     console.log(arr)
// }
// func([1, 2, 3, 4, 5]);

// створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// let arr = [];
// function func(num){
//     for(i = 0; i < num; i++){
//         arr.push(Math.round(Math.random()*100));
//     }
//    return arr; 
// }
// let result = (func(10));
// console.log(result);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function func(num1, num2, num3){
//     return Math.min(num1, num2, num3);
// }
// console.log(func(2,5,7));

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function func(num1, num2, num3){
//     return Math.max(num1, num2, num3);
// }
// console.log(func(2,5,7));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function func(num1, num2, num3){
//     alert(Math.max(num1, num2, num3));
//     return Math.min(num1, num2, num3)
// }
// console.log(func(1,2,3))

// - створити функцію яка повертає найбільше число з масиву

// function maxOf(arr){
//     let max = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] >= max){
//             max = arr[i];
//         }
//     }
//     console.log("max:" + max);
//     return max;
// }
// maxOf([1,2,3,1,3,5,3,1]);

// - створити функцію яка повертає найменьше число з масиву

// let result;
// function func(arr){
//         result = Math.min.apply(null,arr)
    
//     return result;
// }
// console.log(func([6,7,1,3,5]));

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// let sum = 0;
// function func(arr){
//     for(let elem of arr){
//         sum += elem;
//     }
//     return sum;
// }
// console.log(func([1,2,3,4]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let sum = 0;
// function func(arr){
//     for(let elem of arr){
//         sum += elem;
//     }
//     return sum / arr.length;
// }
// console.log(func([1,2,3,4]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let sum = 0;
// function func(arr){
//     for(let elem of arr){
//         if(typeof(elem) === 'object'){
//             sum++;
//         }
//     }
//     return sum
// }
// console.log(func([{name: 'oleksii'}, {secondName: 'psaruk'}, {old: 20}, 2, 'oleksii', 5, 'owu']));

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let result;
// function func(arr){
//     for(let elem of arr){
//         for(let elems in elem){
//             result = String(elems);
//             console.log(result);
//         }
//     }
//     return result.length + 1;
// }

// console.log(func([{name: 'oleksii', secondName: 'psaruk'}, {from: 'drogobych', old: 20}, {wife: false, daddy: 'andrii'}]));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

// function func(arr1, arr2){
// let sum = 0;
// let arr3 = [];
// for(let i = 0; i < arr1.length; i++){
//     sum = arr1[i] + arr2[i];
//     arr3.push(sum);
// }
// return arr3;
// }
// console.log(func([1,2,3,4], [5,6,7,8]));

// приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// function func(arr, num){
//     let i = arr.indexOf(num);
//     let t = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = t;
//     return arr;
// }
// console.log(func([55,66,77,44,4], 2));                             
 


// створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень. Довжина масиву від 2 до 100
// function func(arr){
//     for(let i = 0; i < arr.length; i++){
//         if (arr.indexOf(0) !== -1){
//             let b = arr.splice(arr.indexOf(0), 1);
//             arr.push(b[0]);
//         }
//     }
//     return arr;
// }
// console.log(func([1,2,3,0,4,5,0,0]));

// створити функцію, яка в боді додає блок з текстом 'hello world!'

// let div = document.createElement('div');
// let str = document.createElement('h1');
// let body = document.querySelector('body');
// body.appendChild(div);
// div.appendChild(str);

// function func(text){
//     str.innerText = text;
// }
// func('hello world!')

// Створити функцію,яка додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function func(type, text){
//     let str = document.createElement(type);
//     let body = document.querySelector('body');
//     body.appendChild(str);
//     str.innerText = text;
// }
// func('h1', 'hello world!');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту, в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоц

// let arr = [
//     {
//         name: 'mersedes',
//         old: 5,
//         model: 'E-class',
//         color: 'white',
//         comfortable: true,
//     },
//     {
//         name: 'BMW',
//         old: 10,
//         model: '5-sereis',
//         color: 'black',
//         comfortable: true,
//     },
//     {
//         name: 'Audi',
//         old: 3,
//         model: 'A8-long',
//         color: 'blue',
//         comfortable: true,
//     },
//     {
//         name: 'Renault',
//         old: 15,
//         model: 'Megane',
//         color: 'white',
//         comfortable: false,
//     },
//     {
//         name: 'Suzuki',
//         old: 2,
//         model: 'Grant vitara',
//         color: 'white',
//         comfortable: true,
//     },
// ]
// function func(array, id){
//     let divCarArray = document.querySelector('#' + id);

//     for(let i=0; i<array.length; i++) {
//         const p = document.createElement('p')
//         const userInfo = array[i].name + ' ' + array[i].model
//         p.innerText = userInfo;
//         divCarArray.appendChild(p);

//     }

// }
// func(arr, 'carArray');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок.
// let arr = [
//     {
//         name: 'mersedes',
//         old: 5,
//         model: 'E-class',
//         color: 'white',
//         comfortable: true,
//     },
//     {
//         name: 'BMW',
//         old: 10,
//         model: '5-sereis',
//         color: 'black',
//         comfortable: true,
//     },
//     {
//         name: 'Audi',
//         old: 3,
//         model: 'A8-long',
//         color: 'blue',
//         comfortable: true,
//     },
//     {
//         name: 'Renault',
//         old: 15,
//         model: 'Megane',
//         color: 'white',
//         comfortable: false,
//     },
//     {
//         name: 'Suzuki',
//         old: 2,
//         model: 'Grant vitara',
//         color: 'white',
//         comfortable: true,
//     },
// ]
// function func(array, id){
//     let divCarArray = document.querySelector('#' + id);
//     for( let i = 0; i<array.length; i++){
//         let a = document.createElement('h2');
//         let a1 = array[i].name;
//         let b = document.createElement('p');
//         let b1 = array[i].model + ' ' + array[i].old + ' ' + array[i].color;
//         a.innerText = a1;
//         b.innerText = b1;
//         divCarArray.appendChild(a);
//         divCarArray.appendChild(b);
//     }
// }
// func(arr, 'carArray');



// *********************************************************************************

// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false}, 
//     {id: 2, name: 'petya', age: 30, status: true}, 
//     {id: 3, name: 'kolya', age: 29, status: true}, 
//     {id: 4, name: 'olya', age: 28, status: false},
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'}, 
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},
//     ];


// function func(arr1, arr2){
//     for(let i=0; i< arr1.length; i++) {
//         for(let j = 0; j < arr2.length; j++) {
//             if(arr1[i].id === arr2[j].user_id) {
//                 arr1[i].city = arr2[j];
//             }
//         }
//     }
//     return arr1;
// }
// console.log(func(usersWithId, citiesWithId));

// *******************************************************************************


// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },

// ];
// let elem = document.querySelector('#elem')
// function func(arr){
//         for(let elem1 of arr){
//         if(elem1.title){
//             let zag = document.createElement('h2');
//             zag.innerText = elem1.title;
//             elem.appendChild(zag);
//         } if(elem1.body){
//             let par = document.createElement('h4');
//             par.innerText = elem1.body;
//             elem.appendChild(par);
//         }
//     }
// }
// console.log(func(rules))
