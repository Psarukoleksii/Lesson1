// - создать массив с 20 числами.
// let arr = [1,4,3,28,5,6,7,25,9,31,11,45,13,81,15,16,94,18,34,20];

// -- при помощи метода sort и колбека  отсортировать массив.
// arr.sort(function(a,b){
//     return a - b;
// })
// console.log(arr);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// arr.sort(function(a,b){
//     return b - a
// })
// console.log(arr);

// else :)

// arr.sort(function(a,b){
//     return a - b
// })
// console.log(arr.reverse());

// -- при помощи filter получить числа кратные 3

// let result = arr.filter(function(elem){
//     if(elem % 3 === 0){
//         return true
//     } else {
//         return false
//     }
// })
// console.log(result);

// -- при помощи filter получить числа кратные 10

// let result = arr.filter(function(elem){
//     if(elem % 10 === 0){
//         return true;
//     }
// })
// console.log(result);

// -- перебрать (проитерировать) массив при помощи foreach()

// let result = arr.forEach(function(elem){
//     console.log(elem);
// })

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let result = arr.map(function(elem){
//     return elem * 3;
// })
// console.log(result);

// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************

// - создать массив со словами на 15-20 элементов.

// let arr = ['oleksii', 'psaruk', 'owu', 'hello', 'world', 'school', 'football', 'book', 'water', 'phone', 'tee', 'coffee', 'reveval', 'rest', 'speed', 'tree', 'bread'];

// -- отсортировать его по алфавиту в восходящем порядке.
// let result = arr.sort(function(a,b){
//     if(a>b){
//         return 1;
//     }
//     return -1
// })
// console.log(arr);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let result = arr.sort(function(a,b){
//     if(a>b){
//         return -1
//     }
//     return 1
// })
// console.log(result);

// -- отфильтровать слова длиной менее 4х символов
// let result = arr.filter(function(elem){
//     if(elem.length <= 4){
//         return true;
//     }
// })
// console.log(result);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let result = arr.map(function(elem){
//     return elem + '!'
// })
// console.log(result);

// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************

// let users = [ 
//     {name: 'vasya', age: 31, status: false}, 
//     {name: 'petya', age: 30, status: true}, 
//     {name: 'kolya', age: 29, status: true}, 
//     {name: 'olya', age: 28, status: false}, 
//     {name: 'max', age: 30, status: true}, 
//     {name: 'anya', age: 31, status: false}, 
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true} 
//     ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let result = users.sort(function(a,b){
//     if(a.age > b.age){
//         return 1
//     }
//     return -1
// })
// console.log(result);

// Спадання

// let result = users.sort(function(a,b){
//     if(a.age > b.age){
//         return -1
//     }
//     return 1
// })
// console.log(result)

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let result = users.sort(function(a,b){
//     if(a.name.length > b.name.length){
//         return 1
//     }
//     return -1
// })
// console.log(result);

// Зростання

// let result = users.sort(function(a,b){
//     if(a.name.length > b.name.length){
//         return -1
//     }
//     return 1
// })
// console.log(result);

// Спадання

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//  та зберегти це в новий масив (первинний масив залишиться без змін)

// let xxx = JSON.stringify(users);
// let abc = JSON.parse(xxx);

// let result = abc.map(function (elem, index) {
//   elem.id = (index+1);
//   return elem;
// })
// console.log(result);

// - відсортувати його за індентифікатором



// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************

// -- наисать функцию калькулятора с 2мя числами и колбеком

// function doHomework(num1, num2, callback) {
//     alert(`Starting function sum of ${num1} and ${num2}`);
//     callback();
//   }
  
//   doHomework(num1 = 1, num2 = 2, function() {
//     let result = num1 + num2;
//     alert(`Finished my function. Result = ${result}`);
//   });

  // -- наисать функцию калькулятора с 3мя числами и колбеком

//   function doHomework(num1, num2, num3, callback) {
//     alert(`Starting function sum of ${num1},${num2} and ${num3}`);
//     callback();
//   }
  
//   doHomework(num1 = 1, num2 = 2, num3 = 3, function() {
//     let result = num1 + num2 + num3;
//     alert(`Finished my function. Result = ${result}`);
//   });



// *********************************************************************************************
// *************************KLASS WORK**********************************************************
// *********************************************************************************************

// let cars = [ 
//   {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//   {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
//   {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//   {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//   {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//   {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//   {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
//   {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//   {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
//   {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//   {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//   {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
//   {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} 
//   ];

//   Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

// cars.filter(function(elem) {
//   if(elem.volume >= 3){
//     console.log(elem);
//   }
// })

// - двигун = 2л

// cars.filter(function (elem) {
//   if(elem.volume === 2){
//     console.log(elem);
//   }
// })

// - виробник мерс

// cars.filter(function(elem) {
//   if(elem.producer === 'mercedes'){
//     console.log(elem);
//   }
// })

// - двигун більше 3х літрів + виробник мерседес

// cars.filter(function (elem) {
//   if(elem.volume >= 3 && elem.producer === 'mercedes'){
//     console.log(elem);
//   }
// })

// - двигун більше 3х літрів + виробник субару

// cars.filter(function (elem) {
//   if(elem.volume >= 3 && elem.producer === 'subaru'){
//     console.log(elem);
//   }
// })

// - сили більше ніж 300

// cars.filter(function (elem) {
//   if(elem.power >= 300){
//     console.log(elem);
//   }
// })

// - сили більше ніж 300 + виробник субару

// cars.filter(function (elem) {
//   if(elem.power >= 300 && elem.producer === 'subaru'){
//     console.log(elem);
//   }
// })

// - мотор серіі ej 
// cars.filter(function (elem) {
//   if(elem.engine.includes('ej')){
//     console.log(elem);
//   }
// })

// - сили більше ніж 300 + виробник субару + мотор серіі ej 
// cars.filter(function (elem) {
//   if(elem.engine.includes('ej') && elem.producer === 'subaru'){
//     console.log(elem);
//   }
// })

// - двигун меньше 3х літрів + виробник мерседес
// cars.filter(function (elem) {
//   if(elem.volume >= 3 && elem.producer === 'mercedes'){
//     console.log(elem);
//   }
// })

// - двигун більше 2л + сили більше 250
// cars.filter(function (elem) {
//   if(elem.volume >= 2 && elem.power >= 250){
//     console.log(elem);
//   }
// })

// - сили більше 250  + виробник бмв

// cars.filter(function (elem) {
//   if(elem.power >= 250 && elem.producer === 'bmw'){
//     console.log(elem);
//   }
// })


// ********************************************************************************************************************

// let usersWithAddress = [
//   {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//   {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//   {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//   {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//   {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
//   {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//   {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
//   {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//   {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
//   {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//   {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
// ];


// -- отсортировать его по id пользователей

// let result = usersWithAddress.sort(function (a,b) {
//   if(a.id > b.id){
//     return 1
//   }
//   return -1
// })
// console.log(result);

// -- отсортировать его по id пользователей в обратном опрядке

// let result = usersWithAddress.sort(function (a,b) {
//   if(a.id > b.id){
//     return -1
//   }
//   return 1
// })
// console.log(result);

// -- отсортировать его по возрасту пользователей

// let result = usersWithAddress.sort(function (a,b) {
//   if(a.age > b.age){
//     return 1
//   }
//   return -1
// })
// console.log(result);

// -- отсортировать его по возрасту пользователей в обратном порядке

// let result = usersWithAddress.sort(function (a,b) {
//   if(a.age > b.age){
//     return -1
//   }
//   return 1
// })
// console.log(result);

// -- отсортировать его по имени пользователей

// let result = usersWithAddress.sort(function (a,b) {
//   if(a.name > b.name){
//     return 1
//   }
//   return -1
// })
// console.log(result);

// -- отсортировать его по имени пользователей в обратном порядке

// let result = usersWithAddress.sort(function (a,b) {
//   if(a.name > b.name){
//     return -1
//   }
//   return 1
// })
// console.log(result);

// -- отсортировать его по номеру дома по возрастанию

// let result = usersWithAddress.sort(function (a,b) {
//   if(a.address.number > b.address.number){
//     return 1
//   }
//   return -1
// })
// console.log(result);

// -- отфильтровать (оставить) тех кто младше 30

// usersWithAddress.filter(function (elem) {
//   if(elem.age < 30){
//     console.log(elem);
//   }
// })

// -- отфильтровать (оставить) тех у кого отрицательный статус

// usersWithAddress.filter(function (elem) {
//   if(elem.status === false){
//     console.log(elem);
//   }
// })

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// usersWithAddress.filter(function (elem) {
//   if(elem.age < 30 && elem.status === false){
//     console.log(elem);
//   }
// })

// -- отфильтровать (оставить) тех у кого номер дома четный

// usersWithAddress.filter(function (elem) {
//   if(elem.address.number % 2 === 0){
//     console.log(elem);
//   }
// })


// *****************************************************
// function xxx(arr, el) {
//   let min = 0;
//   let max = 0;
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === el) {
//       min === 0 ? min = i : max = i;
//     }
//   }

//   console.log(min, max)
// }


// xxx([1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14],4 );



