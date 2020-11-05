// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

// let elem = document.getElementById('main_header');
// elem.style.color = 'yellow'; 

// -- робить шириниу елементу ul 400 пікселів
// let elem = document.getElementsByTagName('ul');
// for(let elem1 of elem){
//     elem1.style.width = "400px";
// }

// -- робить шириниу всіх елементів з класом linkList шириною 50%

// let elem = document.getElementsByClassName('linkList');
// for(let elem1 of elem){
//     elem1.style.width = '50%';
// }

// -- отримує текст який зберігається в елементі з класом listElement2

// let elem = document.getElementsByClassName('listElement2');
//     for(let elem1 of elem){
//         console.log(elem1);
//     }

// -- отримує всі елементи li та змінює ім колір фону на сірий

// let elem = document.getElementsByTagName('li');
// for(let elem1 of elem){
//     elem1.style.background = 'grey';
// }

// -- отримує всі елементи 'a' та додає їм клас anchor

// let elem = document.getElementsByTagName('a');
// for(let elem1 of elem){
//     elem1.classList.add('anchor');
// }

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let elem = document.getElementsByTagName('a');
// for(let elem1 of elem){
//     if(elem1.innerText == 'link2'){
//         elem1.style.fontSize = '40px'; 
//     }
// }

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let elem = document.getElementsByTagName('a');
// for(let elem1 of elem){
//     elem1.classList.add('element_' + elem1.innerHTML);
// }

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let str = prompt('Який колір бажаєш?');
// let elem = document.getElementsByClassName('sub-header');
// for(let elem1 of elem){
//     elem1.style.backgroundColor = str;
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let str = prompt('Вкажіть, який бажаєте колір');
// let elem = document.getElementsByClassName('sub-header');
// for(let elem1 of elem){
//     if(elem1.innerHTML == 'content 2 segment'){
//         elem1.style.backgroundColor = str;
//     }
// }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let str = prompt('Вкажіть фразу');
// let elem = document.getElementsByClassName('content_1');
// for(let elem1 of elem){
//     elem1.innerHTML = str;
// }

// -- отримати елементи p та змінити їм paddin на довільне значення

// let elem = document.getElementsByTagName('p');
// for( let elem1 of elem){
//     elem1.style.padding = '30px';
// }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

// let elem = document.getElementsByClassName('text2');
// for(let elem1 of elem){
//     elem1.innerHTML = 'Hello world!';
// }



