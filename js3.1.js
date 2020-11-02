// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let obj = {
//     name: 'Chappy',
//     old: 5,
//     color: 'white',
// }
// let obj2 = {
//     live: 'inLviv',
//     study: 'owu',
//     fon: 'black'
    
// }
// let obj3 = {
//     producer: 'Mersedes',
//     type: 'universal',
//     comfortable: true,
// }
// let obj4 = {
//     phone: 'iPhone',
//     book: 'black',
//     ies: 'blue'
// }
// let obj5 = {
//     tree: 'bereza',
//     house: 'big',
//     money: 'no',
// }


// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. 7
// Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let man = {
//     name: 'kokos',
//     skills: ['java', 'js', 'c++'],
//     wife: {
//         name: 'Ira',
//         old: 20,
//         children: 'none',
//     }
// }
// let car = {
//     producer: 'Mersedes',
//     type: 'universal',
//     comfortable: ['підігів сидінь', 'масаж', 'панорама'],
// }
// let book = {
//     autor: {
//         psevdoName: 'Jack London',
//         married: 'dont know',
//         house: 'big'
//     },
//     ies = 'blue',
//     agresiv: 'no',
// }

// *********************************************************************************************************

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// let obj = {
//     name: 'Chappy',
//     old: 5,
//     color: 'white',
// }
// let obj2 = {
//     live: 'inLviv',
//     study: 'owu',
//     fon: 'black'
    
// }
// let obj3 = {
//     producer: 'Mersedes',
//     type: 'universal',
//     comfortable: true,
// }
// let obj4 = {
//     phone: 'iPhone',
//     book: 'black',
//     ies: 'blue'
// }
// let obj5 = {
//     tree: 'bereza',
//     house: 'big',
//     money: 'no',
// }

// for(let key in obj){
//     console.log([key]);
// }
// for(let key2 in obj2){
//     console.log([key2]);
// }
// for(let key3 in obj3){
//     console.log([key3]);
// }
// for(let key4 in obj4 ){
//     console.log([key4]);
// }
// for(let key5 in obj5){
//     console.log([key5]);
// }




// let man = {
//     name: 'kokos',
//     skills: ['java', 'js', 'c++'],
//     wife: {
//         name: 'Ira',
//         old: 20,
//         children: 'none',
//     }
// }
// let car = {
//     producer: 'Mersedes',
//     type: 'universal',
//     comfortable: ['підігів сидінь', 'масаж', 'панорама'],
// }
// let book = {
//     autor: {
//         psevdoName: 'Jack London',
//         married: 'dont know',
//         house: 'big'
//     },
//     ies: 'blue',
//     agresiv: 'no',
// }
//  for(let key1 in man){
//      console.log([key1]);
//  }
//  for(let key2 in car){
//      console.log([key2]);
//  }
// for(let key3 in book){
//     console.log([key3]);
// }

// *******************************************************************************8

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// let obj = {
//     name: 'Chappy',
//     old: 5,
//     color: 'white',
// }
// let obj2 = {
//     live: 'inLviv',
//     study: 'owu',
//     fon: 'black'
    
// }
// let obj3 = {
//     producer: 'Mersedes',
//     type: 'universal',
//     comfortable: true,
// }
// let obj4 = {
//     phone: 'iPhone',
//     book: 'black',
//     ies: 'blue'
// }
// let obj5 = {
//     tree: 'bereza',
//     house: 'big',
//     money: 'no',
// }

// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(obj3));
// console.log(Object.keys(obj4));
// console.log(Object.keys(obj5));

// let man = {
//     name: 'kokos',
//     skills: ['java', 'js', 'c++'],
//     wife: {
//         name: 'Ira',
//         old: 20,
//         children: 'none',
//     }
// }
// let car = {
//     producer: 'Mersedes',
//     type: 'universal',
//     comfortable: ['підігів сидінь', 'масаж', 'панорама'],
// }
// let book = {
//     autor: {
//         psevdoName: 'Jack London',
//         married: 'dont know',
//         house: 'big'
//     },
//     ies: 'blue',
//     agresiv: 'no',
// }
// console.log(Object.keys(man));
// console.log(Object.keys(car));
// console.log(Object.keys(book));

// *************************************************************************************************

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

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

// console.log(arr);

// *************************************************************************

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let town = [
//     {
//         name: 'Lviv',
//         people: 800000,
//         country: 'Ukraine',
//         comfortable: true
//     },
//     {
//         name: 'Kyiv',
//         people: 2000000,
//         country: 'Ukraine',
//         comfortable: true
//     },
//     {
//         name: 'California',
//         people: 3000000,
//         country: 'USA',
//         comfortable: true
//     },
//     {
//         name: 'Berlin',
//         people: 2500000,
//         country: 'Germany',
//         comfortable: true
//     },
//     {
//         name: 'Madrid',
//         people: 1800000,
//         country: 'Spain',
//         comfortable: true
//     },
// ]
// console.log(town)

// ****************************************************************************

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. 
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let arr = [
//     {
//         name: 'mersedes',
//         old: 5,
//         model: 'E-class',
//         color: 'white',
//         comfortable: true,
//         driver: {
//             name: 'oleksii',
//             old: 20,
//             sex: 'man',
//             experience: '2 years',
//         }
//     },
//     {
//         name: 'BMW',
//         old: 10,
//         model: '5-sereis',
//         color: 'black',
//         comfortable: true,
//         driver: {
//             name: 'vasya',
//             old: 35,
//             sex: 'man',
//             experience: '10 years',
//         }
//     },
//     {
//         name: 'Audi',
//         old: 3,
//         model: 'A8-long',
//         color: 'blue',
//         comfortable: true,
//         driver: {
//             name: 'ira',
//             old: 25,
//             sex: 'woman',
//             experience: '5 years',
//         }
//     },
//     {
//         name: 'Renault',
//         old: 15,
//         model: 'Megane',
//         color: 'white',
//         comfortable: false,
//         driver: {
//             name: 'andrii',
//             old: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Suzuki',
//         old: 2,
//         model: 'Grant vitara',
//         color: 'white',
//         comfortable: true,
//         driver: {
//             name: 'Petro',
//             old: 60,
//             sex: 'man',
//             experience: '35 years',
//         }
//     },
// ]
// console.log(arr);


// ***********************************************************************

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

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

// let i = 0;
// while(i < arr.length){
//     console.log(arr[i]);
//     i++;
// }

// ***********************************************************

// - проитерировать каждый массив из задания 5,6,7 при помощи for .

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

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// *************************************************************

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

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

// for(let elem of arr){
//     console.log(elem);
// }

// ****************************************************************

// - взять объекты из задания 1 и превратить каждый в json.


// let obj = {
//     name: 'Chappy',
//     old: 5,
//     color: 'white',
// }

// let abc = JSON.stringify(obj);
// console.log(abc);

// let obj2 = {
//     live: 'inLviv',
//     study: 'owu',
//     fon: 'black'
    
// }
// let abc1 = JSON.stringify(obj2);
// console.log(abc1);

// let obj3 = {
//     producer: 'Mersedes',
//     type: 'universal',
//     comfortable: true,
// }
// let abc2 = JSON.stringify(obj3);
// console.log(abc2);

// let obj4 = {
//     phone: 'iPhone',
//     book: 'black',
//     ies: 'blue'
// }
// let abc4 = JSON.stringify(obj4);
// console.log(abc4);

// let obj5 = {
//     tree: 'bereza',
//     house: 'big',
//     money: 'no',
// }

// let abc5 = JSON.stringify(obj5);
// console.log(abc5);

// ****************************************************

//  взять json из задания 11 и превратить их обратно в объекты.

// let obj = {
//     name: 'Chappy',
//     old: 5,
//     color: 'white',
// }

// let abc = JSON.stringify(obj);
// console.log(abc);

// let cba = JSON.parse(abc);
// console.log(cba);

// let obj2 = {
//     live: 'inLviv',
//     study: 'owu',
//     fon: 'black'
    
// }
// let abc1 = JSON.stringify(obj2);
// console.log(abc1);

// let cba2 = JSON.parse(abc1);
// console.log(cba);

// let obj3 = {
//     producer: 'Mersedes',
//     type: 'universal',
//     comfortable: true,
// }
// let abc2 = JSON.stringify(obj3);
// console.log(abc2);

// let cba3 = JSON.parse(abc2);
// console.log(cba2);

// let obj4 = {
//     phone: 'iPhone',
//     book: 'black',
//     ies: 'blue'
// }
// let abc4 = JSON.stringify(obj4);
// console.log(abc4);

// let cba4 = JSON.parse(abc4);
// console.log(cba4);

// let obj5 = {
//     tree: 'bereza',
//     house: 'big',
//     money: 'no',
// }

// let abc5 = JSON.stringify(obj5);
// console.log(abc5);

// let cba5 = JSON.parse(abc5);
// console.log(cba5);

// *********************************************************

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

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

// for(let i = 0; i < arr.length; i++){
//     let s = JSON.stringify(arr[i])
//     console.log(s);
// }

// ***********************************************************

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// let town = [
//     {
//         name: 'Lviv',
//         people: 800000,
//         country: 'Ukraine',
//         comfortable: true
//     },
//     {
//         name: 'Kyiv',
//         people: 2000000,
//         country: 'Ukraine',
//         comfortable: true
//     },
//     {
//         name: 'California',
//         people: 3000000,
//         country: 'USA',
//         comfortable: true
//     },
//     {
//         name: 'Berlin',
//         people: 2500000,
//         country: 'Germany',
//         comfortable: true
//     },
//     {
//         name: 'Madrid',
//         people: 1800000,
//         country: 'Spain',
//         comfortable: true
//     },
// ]
// for(let elem of town){
//     let s = JSON.stringify(elem);
//     console.log(s);
// }

// **********************************************************

//- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let arr = [
//     {
//         name: 'mersedes',
//         old: 5,
//         model: 'E-class',
//         color: 'white',
//         comfortable: true,
//         driver: {
//             name: 'oleksii',
//             old: 20,
//             sex: 'man',
//             experience: '2 years',
//         }
//     },
//     {
//         name: 'BMW',
//         old: 10,
//         model: '5-sereis',
//         color: 'black',
//         comfortable: true,
//         driver: {
//             name: 'vasya',
//             old: 35,
//             sex: 'man',
//             experience: '10 years',
//         }
//     },
//     {
//         name: 'Audi',
//         old: 3,
//         model: 'A8-long',
//         color: 'blue',
//         comfortable: true,
//         driver: {
//             name: 'ira',
//             old: 25,
//             sex: 'woman',
//             experience: '5 years',
//         }
//     },
//     {
//         name: 'Renault',
//         old: 15,
//         model: 'Megane',
//         color: 'white',
//         comfortable: false,
//         driver: {
//             name: 'andrii',
//             old: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Suzuki',
//         old: 2,
//         model: 'Grant vitara',
//         color: 'white',
//         comfortable: true,
//         driver: {
//             name: 'Petro',
//             old: 60,
//             sex: 'man',
//             experience: '35 years',
//         }
//     },
// ]

// for(let elem of arr){
//     let arr1 = [];
//     let s = JSON.stringify(elem)
//     arr1.push(s);
//     console.log(arr1);
// }


// **************************************************************************

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. 
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let users = [
//     {
//         name: 'name1',
//         age: 31,
//         skills: ['java', 'python', 'c++'],
//     },
//     {
//         name: 'name2',
//         age: 32,
//         skills: ['java', 'javascript'],
//     },
//     {
//         name: 'name3',
//         age: 33,
//         skills: ['java', 'c-sharp'],
//     },
// ];

// for(let user of users){
//     for(let elem in user){
//         console.log(user[elem])
//     }
// }


// ******************************************************************************

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. 
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// let users = [
//     {
//         name: 'name1',
//         age: 31,
//         skills: ['java', 'python', 'c++'],
//     },
//     {
//         name: 'name2',
//         age: 32,
//         skills: ['java', 'javascript'],
//     },
//     {
//         name: 'name3',
//         age: 33,
//         skills: ['java', 'c-sharp'],
//     },
// ];

// let arr = [];
// for(let user of users){
//     arr.push(user['skills']);
// }
// console.log(arr);

// **********************************************************

// За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];

// for(let user of users){
//     for(let elem in user){
//         console.log(user[elem]);
//     }
// }



// *****************************************************************************************

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let arr = [];
// for(let user of users){
//     arr.push(user['address']);
// }
// console.log(arr);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement. Всі данні в одному блоці.

// let container = document.querySelector('.container');

// for (let user of users) {

// let newUser = document.createElement("div");
// newUser.innerHTML = `name: ${user.name} age: ${user.age} status: ${user.status}`;
// console.log(newUser);
// container.appendChild(newUser);
// newUser.style.border = ('1px solid black');
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , 
// блок з адресою зробити окремим блоком, з блоками для кожної властивості


// ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {}}, 
//     {id: 2, name: 'petya', age: 30, status: true, address: {}}, 
//     {id: 3, name: 'kolya', age: 29, status: true, address: {}},
//      {id: 4, name: 'olya', age: 28, status: false, address: {}},
//     ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'}, 
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},
//     ];

// for(i = 0; i < usersWithId.length; i++){
//     for(j = 0; j <citiesWithId.length; j++){
//         if(usersWithId[i].id == citiesWithId[j].user_id){
//             usersWithId[i].address = citiesWithId[j];      
//         }
//     }
// }
// console.log(usersWithId);




// ****************************************************************
// ************************DOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM********************************

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

// let elem = document.querySelector('#divka');
// console.log(elem);
// let elem = document.querySelector('.divka');
// console.log(elem);

// ******************************************************

// - змінити цей текст використовуючи селектори id, class,  tag

// let elem = document.querySelector('#divka');
// elem.innerHTML = 'hello!'
// console.log(elem);
// let elem = document.querySelector('.divka');
// elem.innerHTML = 'hello woooooooooorld';
// console.log(elem);


// *********************************************
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let elem = document.getElementById('divka')
// elem.style.width = '300px';
// elem.style.height = '150px';
// console.log(elem);

// *************************************

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let main = document.createElement('div');
// main.style.width = '300px';
// main.style.height = '150px';
// main.style.backgroundColor = '#000000'; 

// let body = document.querySelector('body');
// body.appendChild(main);



// for(i = 0; i < 3; i++){
//     let divka = document.createElement('div');
//     divka.style.width = '100px';
//     divka.style.height = '150px';
//     divka.style.border = '1px solid white';
//     main.appendChild(divka); 
//     divka.style.display = 'inline-block';
// }

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// let main = document.createElement('div');
// main.style.width = '300px';
// main.style.height = '1050px';
// main.style.backgroundColor = '#000000'; 

// let body = document.querySelector('body');
// body.appendChild(main);



// for(i = 0; i < 30; i++){
//     let divka = document.createElement('div');
//     divka.style.width = '100px';
//     divka.style.height = '100px';
//     divka.style.border = '1px solid white';
//     divka.style.margin = '0px';
//     main.appendChild(divka); 
//     divka.style.display = 'inline-block';
//     divka.style.boxSizing = 'border-box';
// }

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// let table = document.querySelector('#emptyTable');

// for (let i = 0; i < 10; i++) {
// let tr = document.createElement('tr');

// for (let j = 0; j < 5; j++) {
// let td = document.createElement('td');
// td.style.border = '1px solid black';
// td.style.width = '200px';
// td.style.height = '50px'; 
// td.classList.add('forTd')
// tr.appendChild(td);
// }
// table.appendChild(tr);
// }

// за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let n = +prompt('Введіть рядки');
// let m = +prompt('Введіть стовпці');
// let table = document.querySelector('#emptyTable');

// for (let i = 0; i < n; i++) {
// let tr = document.createElement('tr');

// for (let j = 0; j < m; j++) {
// let td = document.createElement('td');
// td.style.border = '1px solid black';
// td.style.width = '200px';
// td.style.height = '50px'; 
// td.classList.add('forTd')
// tr.appendChild(td);
// }
// table.appendChild(tr);
// }
