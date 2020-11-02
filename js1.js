// - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
// let a = 'hello';
// console.log(a);
// let b = 'owu';
// console.log(b);
// let c = 'com';
// console.log(c);
// let d = 'ua';
// console.log(d);
// let num1 = 1;
// console.log(num1);
// let num2 = 10;
// console.log(num2);
// let num3 = -999;
// console.log(num3);
// let num4 = 123;
// console.log(num4);
// let num5 = 123;
// console.log(num5);
// let num6 = 3.14;
// console.log(num6);
// let num7 = 2.7;
// console.log(num7);
// let num8 = 16;
// console.log(num8);
// let bool1 = true;
// console.log(bool1);
// let bool2 = false;
// console.log(bool2);

// - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
// const name = 'Oleksii';
// document.write(name + '</br>');
// const secondName = 'Psaruk';
// document.write(secondName + '</br>');
// const from = 'Drogobych';
// document.write(from + '</br>');
// const birthdayYear = 2000;
// document.write(birthdayYear + '</br>');
// const todayData = 28;
// document.write(todayData + '</br>');
// const old = 20;
// document.write(old + '</br>');

// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
// let name = prompt('Ваше імя');
// let secondName = prompt('Ваше прізвище');
// let batko = prompt('По-батькові');

// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
// document.write('Ваше ПІБ: ' + name + secondName + batko);

// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
// let mommy = prompt('Мама');
// let daddy = prompt('Тато');
// let sister1 = prompt('Старша сестра');
// let sister2 = prompt('Молодша сестра');
// document.write('Моя сімя це:' + mommy + ' ' + daddy + ' ' + sister1 + ' ' + sister2);

// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
// let num1 = +prompt('Перше число');
// let num2 = +prompt('Друге число');
// let num3 = +prompt('Третє число');
// console.log(num1, num2, num3);

// - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let num1 = parseInt(prompt('Перше число'));
// let num2 = parseInt(prompt('Друге число'));
// let num3 = parseInt(prompt('Третє число'));
// let result = num1 + num2 + num3;
// console.log(result);

// - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let num1 = parseFloat(prompt('Перше число'));
// let num2 = parseFloat(prompt('Друге число'));
// let num3 = parseFloat(prompt('Третє число'));
// let result = num1 + num2 + num3;
// console.log(result);
// Наприклад, якщо задати в prompt = всім трьом змінним 3.2px - то виведеться 9.6, без пікселів. 

// - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
// let num1 = parseInt(prompt('Перше число'));
// let num2 = parseInt(prompt('Друге число'));
// let num3 = parseInt(prompt('Третє число'));
// let result = num1 + num2 + num3;
// console.log(Math.round(result));

// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
// let num1 = +prompt('Перше число');
// let num2 = +prompt('Друге число');
// let result = num2 ** num1;
// console.log(result);

// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));

// Каждое выражение вложить в свою переменную
//     5 ? 6 -> true
//     5 ? 6 -> false
//     5 ? 6 -> false
//     5 ? 6 -> false
//     10 ? 10 -> true
//     10 ? 10 -> true
//     10 ? 10 -> false
//     10 ? 10 -> false
//     10 ? 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true

// let a = 5 < 6;
// console.log(a);
// let b = 5 > 6;
// console.log(b);
// let c = 5 == 6;
// console.log(c);
// let d = 5 === 6;
// console.log(d);
// let e = 10 == 10;
// console.log(e);
// let f = 10 === 10;
// console.log(f);
// let j = 10 != 10;
// console.log(j);
// let i = 10 !== 10;
// console.log(i);
// let k = 10 < 10;
// console.log(k);
// let p = 123 === '123';
// console.log(p);
// let l = 123 !== '123'
// console.log(l);

// Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 );  --> false
// console.log(34 > 33 && 23 < 90 );    --> true
// console.log(99 > 100 && 45 > 12 );   --> false
// console.log(132 > 100 || 45 < 12 );  --> false
// console.log(111 > 11 || 45 < 111 );  --> true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );      --> true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );       --> true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );    --> false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));       --> true
// console.log(!!'-1');     --> true
// console.log(!!-1);       --> true
// console.log(!!'0');      --> false
// console.log(!!'null');   --> false
// console.log(!!'undefined'); --> false
// console.log(!!(3/'owu'));  --> false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); --> true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )) --> false


// *********************************************************************************CLASSS**************************************************************************

// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

// let str = 'Привіт';
// let num = 123;
// let flag = true;
// let txt = 'true';
// console.log(typeof(str));
// console.log(typeof(num));
// console.log(typeof(flag));
// console.log(typeof(txt));


// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
    // 5 + 3,
    // 5 - 3,
    // 5 * 3,
    // 5 / 3,
    // 5 % 3
    // поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;

// console.log(a1, a2, a3, a4, a5);

// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
// 5 % 3,
// 3 % 5,
// 5 + '3',
// '5' - 3,
// 75 + 'кг'

// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';

// console.log(a6, a7, a8, a9, a10);

// 4. 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height), шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// let height = 23;
// let width = 10;
// let s = width * height;
// console.log('Площа прямокутника ' + s + 'см');

// 5. Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),результат поместите в переменную v.

// let height = 10;
// let d = 4;
// let sOsn = 4 * Math.PI;
// let v = height * sOsn;
// console.log(Math.round(v));

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4). Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// let n = 3;
// let m = 4;

// let Pif = 3**2 + 4**2;
// console.log(Math.pow(Pif, 0.5)); --> гіпотенуза

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

// let str = 'Hello world';
// console.log(str);
// alert(str);
// document.write(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// let a = 'Oleksii';
// let b = 'Psaruk';
// let c = 'Andriyovich';
// let d = 20;
// let e = 'Моє хобі це футбол:)';

// alert(a + ' \n ' + b + '\n' + c + '\n' + d + 'років' + ' \n' + e);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation. Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
// Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3. Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Хто';
// let str2 = 'Ти';
// let str3 = 'Такий?'
// let concatenation = str1 + ' ' + str2 + ' ' + str3;

// console.log(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    // let str = "20";
    // let a = 5;
    // // document.write(str + a + "<br/>"); --> 205
    // // document.write(str - a + "<br/>"); --> 15 
    // // document.write(str * "2" + "<br/>"); --> 40
    // document.write(str / 2 + "<br/>"); --> 10

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
    // (parseInt("3.14"); ->> 3 
    // parseInt("-7.875") ->> -7
    // parseInt("435") ->> 435
    // parseInt("Вася") ->> NaN

// 12. С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
    // let str = prompt("Enter something", "ho-ho")
    // console.log(str);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert;

// let str = +prompt('Число один');
// let str2 = +prompt('Число два');
// let sum = str + str2;
// alert(sum);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//   Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// let a = prompt('Ваше імя');
// let b = prompt('Ваше прізвище');
// let c = prompt('Ваш вік');

// alert('Доброго вечора ' + a + ' ' + b + ' ' + 'мої вітання, що вам ' + c);


// *************************************************************************DODATKOVI**********************************************************************
// 1. 1. Три різних числа вводяться через prompt(). За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню);

// let a = +prompt('Число один');
// let b = +prompt('Число два');
// let c = +prompt('Число три');

// if(a > b && a > c && b > c) {
//     console.log(c, b, a);
// } else if (a > c && a > b && b < c) {
//     console.log(b, c, a);
// } else if ( b > a && b > c && a < c ) {
//     console.log(a, c, b);
// } else if ( b > a && b > c && a > c) {
//     console.log(c, a, b);
// } else if ( c > a && c > b && a > b) {
//     console.log(b, a, c);
// } else if ( c > a && c > b && a < b) {
//     console.log(a, b, c);
// } else {
//     console.log('Щось не так');
// }

// 2. Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!


// let str = +prompt('Що ви бачите? Якщо зелене світло - напишіть "1", якщо жовте - "2", якщо червоне "3", якщо аварійний світлофор "4"');

// if(str == 1) {
//     alert('Йди з Богом');
// } else if ( str == 2) {
//     alert('Почекай');
// } else if (str == 3) {
//     alert ('Стій');
// } else if (str == 4) {
//     alert('Роби, що хочеш');
// } else {
//     alert('Ти щось не добре зробив!!'); 
// }

// 3. Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let str1 = +prompt('Що ви бачите? Якщо зелене світло - напишіть "1", якщо жовте - "2", якщо червоне "3", якщо аварійний світлофор "4"');
// let str2 = +prompt('Що ви бачите? Якщо машини є, напишіть "1", якщо машин немає напишіть "2"');

// if (str1 == 1 && str2 == 2) {
//     alert('Йди');
// } else if ( str1 == 1 && str2 == 1) {
//     alert('Почекай поки порушники проїдуть');
// } else if ( str1 == 2 && str2 == 2) {
//     alert ('Все рівно чекай');
// } else if ( str1 == 2 && str2 == 1) {
//     alert('Чекай');
// } else if ( str1 == 3 && str2 == 2) {
//     alert('Все рівно стій');
// } else if ( str1 == 3 && str2 == 1) {
//     alert('Стій і чекай');
// } else if ( str1 == 4) {
//     alert('Роби що хочеш');
// } else {
//     alert('Ви щось не добре вказали!!');
// }


