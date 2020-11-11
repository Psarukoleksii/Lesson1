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

// let result = users.sort(function(a,b){
//     if(a.name.length > b.name.length){
//         for(let i = 0; i < users.length; i++){
//             users[i].id = i+1;
//         }
//         return -1
//     }
//     return 1
// })
// console.log(result);

// - відсортувати його за індентифікатором

// let result2 = result.sort(function(a,b){
//     if(a.id > b.id){
//         return -1
//     }
//     return 1
// })
// console.log(result2);

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

