// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let arr2 = ['hello', 'oleksii', 'world', 'name', 'okten'];
// console.log(arr2);
// let arr3 = ['hello', true, false, 19, 'world'];
// console.log(arr3);

// **************************************

// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr[0] = 'hello';
// arr[1] = 'world';
// arr[2] = 'okten';
// arr[3] = 'hi!';
// arr[4] = 19;
// arr[5] = true;
// arr[6] = false;
// arr[9] = 25;
// console.log(arr);

// ***********************

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for(i = 0; i < 10; i++) {
//     document.write('<div>Hello!</div>');
// }

// ********************************

// - - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let num = 0;
// while (num < 20){
//     document.write("<div> Hello! </div>");
//     num++;
// }

// **********************************************************

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(i=0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// ********************************************************

// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['Hello', 'Oleksii', 'Psaruk', 'Lviv', 'Okten', 'World', 'Phone', 'Book', 'Bag', 'Planet'];
// for(i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// ***********************************************

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = ['hello', true, false, 20, 18, 14, 'okten', 'oleksii', 'world', 24];
// for(i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// **********************************************

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = ['hello', true, false, 20, 18, 14, 'okten', 'oleksii', 'world', 24];
// for( let i = 0; i < arr.length; i++){
//     if(arr[i] === true || arr[i] === false){
//         console.log(arr[i]);
//         console.log(i);
//     }
// }

// ***********************************

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = ['hello', true, false, 20, 18, 14, 'okten', 'oleksii', 'world', 24];
// for(let elem of arr){
//     if(typeof(elem) == 'number'){
//         console.log(elem);
//     }
// }

// *****************************

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = ['hello', true, false, 20, 18, 14, 'okten', 'oleksii', 'world', 24];
// for(let elem of arr){
//     if(typeof(elem) == 'string'){
//         console.log(elem);
//     }
// }

// ****************************

// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 'hello';
// arr[4] = 'world';
// arr[5] = 'okten';
// arr[6] = 'web';
// arr[7] = false;
// arr[8] = true;
// arr[9] = 10;
// console.log(arr);

// *********************

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for(i = 0; i < 10; i++){
//     console.log(i);
//     document.write(i);
// }

// ***********************

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for(i = 0; i < 100; i++){
//     console.log(i);
//     document.write(i);
// }

// *************************

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for(i = 0; i < 100; i = i + 2) {
//     console.log(i);
//     document.write(i);
// }

// **************************

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for(i = 1; i < 100; i = i + 2){
//     console.log(i);
//     document.write(i);
// }

// *******************************

// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for(let i = 1; i < 3; i++){
//     for(let k = 1; k < 61; k++){
//         console.log(i, k);
//     }
// }

// *********************************

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

//     for(i = 1; i < 3; i++){
//     for(k = 1; k < 60; k++){
//         if(i == 2 && k == 20) {
//             break;
//         }
//     for(j = 1; j < 60; j++){
//         console.log(i, k, j)
//         }
//     }
// }

// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.


// 1. За допомогою циклу for зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let sum = '';
// for(i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);

// 2. За допомогою циклу while зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let sum = '';
// let i = 0;
// while(i < arr.length) {
//     sum += arr[i];
//     i++;
// }
// console.log(sum);

// 3. За допомогою циклу for of зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let sum = '';
// for(let elem of arr){
//     sum += elem;
// }
// console.log(sum);

// ********************************

// ******************************

// *********************************

// *********************************

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

// 1. перебрати його циклом while

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while(i < arr.length){
//     console.log(arr[i]);
//     i++;
// }

// 2.  перебрати його циклом for

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for(i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 1;
// while (i < arr.length){
//     console.log(arr[i]);
//     i = i + 2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for(i = 1; i < arr.length; i = i + 2){
//     console.log(arr[i]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення.

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length){
//     console.log(arr[i]);
//     i = i + 2;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for(i = 0; i < arr.length; i = i + 2){
//     console.log(arr[i]);
// }

// 7. замінити кожне число кратне 3 на слово "okten"
let arr = [2,17,13,6,22,31,45,66,100,-18];
for(i = 0; i < arr.length; i++){
    if(arr[i] % 3 === 0){
        arr[i] = 'okten';
    }
}
console.log(arr);

// 8. вивести масив в зворотньому порядку.

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let result = [];

// for (let i = arr.length-1; i >= 0; i--) {
//     result.push(arr[i]);
// }
// console.log(result);

// 9. ???

// 10.1 Заповнити масив непарними 50 числами

// let arr = [];
// for(let i = 1; i < 100; i = i + 2){
//     arr.push(i);
// }
// console.log(arr);

// 10.2 Зповнити масив парними 50 числами

// let arr = [];
// for(let i = 2; i <= 100; i = i + 2){
//     arr.push(i);
// }
// console.log(arr);
