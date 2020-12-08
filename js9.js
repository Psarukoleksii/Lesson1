
// **************HOME WORK************************
// ОПИСАТИ ЗА ДОПОМОГОЮ КОЛЛБЕКІВ СВІЙ ЗВИЧАЙНИЙ
// ДЕНЬ
// **************HOME WORK************************

// function getUp(cb){
//     console.log('Прокинувся');
//
//     setTimeout(()=>{
//         console.log('Відкрив очі');
//         setTimeout(()=>{
//             cb()
//         }, 1000)
//     }, 1000)
// }
//
// function drink(coffee, cb){
//     setTimeout(()=>{
//         console.log('Поставив воду на каву');
//     }, 1000);
//     console.log('Дивлюсь чи є кава');
//
//     if(!coffee){
//         setTimeout(()=> {
//             cb('Засмутився', null);
//         }, 1000)
//     } else {
//         setTimeout(()=>{
//             cb(null, 'Заварив каву і випив її')
//         },1000)
//     }
// }
// function study(subject, cb){
//     setTimeout(()=> {
//         console.log('Відкрив компютер')
//     },1000);
//
//     setTimeout(()=> {
//         console.log('Дивлюсь чи є сьогодні пари')
//     }, 2000);
//     if(!subject){
//         setTimeout(()=>{
//             cb('Йду читати JS :)', null)
//         }, 3000)
//     } else {
//         setTimeout(()=>{
//             cb(null, 'Йду слухати лекції від Палітєха:(');
//         }, 3000)
//     }
//
// }
//
// function sport(football, cb){
//     console.log('Позвонив до друзів запитатись чи є футбол...');
//     console.log('Відповідають........');
//
//     if(!football){
//         cb('Вчусь далі', null);
//     } else {
//         cb(null, 'Йду на футбол');
//     }
// }
//
// function eat(cb){
//     cb();
// }
//
// function sleep(time, cb){
//     console.log('Дивлюсь на годинник');
//
//     if(time > 23){
//         cb(null, 'Йду спати');
//     } else{
//         cb('Йду ще повчусь', null)
//     }
// }
//
//
// getUp(()=>{
//     console.log('Встав з ліжка');
//     drink(false, (err, data)=>{
//         if(err){
//             console.log(err)
//         } else {
//             console.log(data);
//         }
//         study(false, (err, data)=>{
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(data);
//             }
//             sport(true, (err, data)=>{
//                 if(err){
//                     console.log(err)
//                 } else{
//                     console.log(data);
//                 }
//                 eat(()=> {
//                     console.log('Втомлений...');
//                     console.log('Йду їсти');
//                     sleep(24, (err, data)=>{
//                         if(err){
//                             console.log(err);
//                         } else {
//                             console.log(data);
//                         }
//                     })
//                 })
//             })
//         })
//     })
// })

// **************HOME WORK************************
// ОПИСАТИ ЗА ДОПОМОГОЮ ПРОМІСІВ СВІЙ ЗВИЧАЙНИЙ
// ДЕНЬ
// **************HOME WORK************************

// function getUp(){
//     return new Promise((resolve, reject) => {
//         console.log('Прокинувся');
//
//         setTimeout(()=>{
//             console.log('Відкрив очі');
//             setTimeout(()=>{
//                 resolve('Встав з ліжка')
//             }, 1000)
//         }, 1000)
//     })
// }
//
// function drink(coffee){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('Поставив воду на каву');
//         }, 1000);
//         console.log('Дивлюсь чи є кава');
//
//         if(!coffee){
//             setTimeout(()=> {
//                 resolve('Засмутився');
//             }, 1000)
//         } else {
//             setTimeout(()=>{
//                 resolve('Заварив каву і випив її')
//             },1000)
//         }
//     })
// }
//
// function study(subject){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log('Відкрив компютер')
//         },1000);
//
//         setTimeout(()=> {
//             console.log('Дивлюсь чи є сьогодні пари')
//         }, 2000);
//         if(!subject){
//             setTimeout(()=>{
//                 resolve('Йду читати JS :)')
//             }, 3000)
//         } else {
//             setTimeout(()=>{
//                 resolve('Йду слухати лекції від Палітєха:(');
//             }, 3000)
//         }
//     })
// }
//
// function sport(football){
//     return new Promise((resolve, reject) => {
//         console.log('Позвонив до друзів запитатись чи є футбол...');
//         console.log('Відповідають........');
//
//         if(!football){
//             resolve('Вчусь далі');
//         } else {
//             resolve('Йду на футбол');
//         }
//     })
// }
//
// function eat(){
//     return new Promise((resolve, reject) => {
//             resolve('Втомлений...йду їсти')
//     })
//
// }
//
// function sleep(time){
//     return new Promise((resolve, reject) => {
//         console.log('Дивлюсь на годинник');
//         if(time > 23){
//             resolve('Йду спати');
//         } else{
//             reject('Йду ще повчусь')
//         }
//     })
// }
//
// getUp()
//     .then(value=>{
//         console.log(value);
//
//         return drink(false);
//     })
//     .then(value=>{
//         console.log(value);
//
//         return study(false);
//     })
//     .then(value=>{
//         console.log(value);
//
//         return sport(false);
//     })
//     .then(value=>{
//         console.log(value);
//
//         return eat()
//     })
//     .then(value=>{
//         console.log(value);
//
//         return sleep(24);
//     })
//     .then(value=>{
//         console.log(value);
//
//         return;
//     }).catch(reason => {
//         console.log(reason);
// })

// **************************************************************************************************************
//***** Знайти найбільший існуючий поліндром який може утворитися завдяки добутку двох простих пятизначних чисел.
// **************************************************************************************************************

// function func(num){
//     for(let j = 2; j < num; j++){
//         if(num % j === 0){
//             return false;
//         }
//     }
//     return num;
// }
//
// let arr = [];
// for(let i = 10000; i < 100000; i++){
//     if(func(i)){
//         arr.push(i)
//     }
// }
// let maxValue = [];
// let result1;
// let result2;
// for(let k = 0; k < arr.length; k++){
//     for(let l = 0; l < arr.length;l++){
//         result1 = arr[k] * arr[l];
//         result2 = String(result1).split('').reverse().join('');
//         if(Number(result1) === Number(result2)){
//             maxValue.push(result1);
//         }
//     }
// }
// let result3 = Math.max(...maxValue);
// console.log(result3);

// ************************************************
// ********Реалізувати друкаську машинку***********
// ************************************************

// let element = document.getElementsByClassName('print')[0]
// let word = 'Hello, i am Oleksii, i love to programming';
//
// print (element,word)
// async function print (element, word) {
//     let arr = word.split('');
//     console.log(arr);
//     for(let letter of arr){
//         await nextLetter(element, letter).then(value=>console.log(value));
//     }
// }
//
// function nextLetter(element, letter){
//     return new Promise(((resolve, reject) => {
//         let random = Math.random();
//         setTimeout(()=>{
//             element.innerHTML += letter;
//             resolve('Виконано');
//         }, random * 1000)
//     }))
// }

// ****************************






