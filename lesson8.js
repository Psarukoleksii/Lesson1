// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let elem = document.querySelector('#elem1');

// elem.value = localStorage.getItem('text');

// elem.oninput = () => {
//     localStorage.setItem('text', elem.value)
// }


// **********************************************************************************


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// let elem1 = document.form.input1;
// let elem2 = document.form.input2;
// let elem3 = document.form.checkbox1;
// let elem4 = document.form.checkbox2;
// let elem5 = document.form.checkbox3;
// let elem6 = document.form.radio1;
// let elem8 = document.form.radio2;
// let elem7 = document.querySelector('#text')

// elem7.value = localStorage.getItem('text');

// elem7.oninput = () => {
//     localStorage.setItem('text', elem7.value)
// }

// elem1.value = localStorage.getItem('input1');

// elem1.oninput = () => {
//     localStorage.setItem('input1', elem1.value);
// }


// elem3.checked = localStorage.getItem('box');

// elem3.oninput = () => {
//     localStorage.setItem('box', elem3.checked);
// }


// ******************ОПТИМІЗАЦІІЯ*******************
// ********************DANGER***********************
// let obj = {
//     input1 : elem1,
//     input2 : elem2,
//     box1: elem3,
//     box2: elem4,
//     box3: elem5,
//     radio1: elem6,
//     radio2: elem8,
//     text: elem7,
// }
// let a;
// for(let key in obj){
//     a = obj[key];
//     console.log(a);
// }

// if(a.getAttribute('type') === 'text'){
//     this.value = localStorage.getItem(this.a);

//     this.oninput = () => {
//         localStorage.setItem(this.a, this.value)
//     }
// }

// ***************************************************************************************

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
//
// let i = 1;
//
//
// button.addEventListener('click', function(){
//     localStorage.setItem(`elem ${i}`, elem.value);
//     i++
//     elem.value = '';
// })
//
// button2.addEventListener('click', function(){
//     i--;
//     if( i < 1) {
//     i = localStorage.length}
//     elem.value = localStorage.getItem(`elem ${i}`);
// })
//
// button1.addEventListener('click', function(){
//     i++;
//     if( i > localStorage.length) {
//     i = 1;}
//     elem.value = localStorage.getItem(`elem ${i}`);
// })



// *****************************************************************



// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, 
// которые уже заполнены данными объекта


// let elem1 = document.form.FIO;
// let elem2 = document.form.tel;
// let elem3 = document.form.email;
// let elem4 = document.form.firma;
// let elem5 = document.form.otdel;
// let elem6 = document.form.HB;
// let button = document.querySelector('#button');



// button.addEventListener('click', function(){
//     let arr = JSON.parse(localStorage.getItem('person'))||[];
//     let obj = {
//     name: elem1.value,
//     phone: elem2.value,
//     email: elem3.value,
//     firm: elem4.value,
//     otdel: elem5.value,
//     birthday: elem6.value,
// }
//     arr.push(obj);
//     localStorage.setItem(`person`, JSON.stringify(arr));

// })

// const userDiv =document.getElementById('users')
// function showUsers(){
//    const  users =JSON.parse(localStorage.getItem('person'))||[]
//    console.log(users)
  
//    users.forEach((element, index) => {
//     let button2 = document.createElement('button');
//     button2.innerHTML = 'delete';
//     button2.style.padding = '20px';
//     button2.addEventListener('click', function(){
//         // div.style.display = 'none';
//         users.splice(index, 1)
//         localStorage.setItem('person', JSON.stringify(users))
//         userDiv.innerHTML = null
//         showUsers();
//     })
//     let button3 = document.createElement('button');
//     button3.innerHTML = 'edit';
//     button3.style.padding = '20px';
//     button3.style.marginLeft = '10px';
//     button3.addEventListener('click', function(){

//     })
//        let div = document.createElement('div');
//     let p = document.createElement('p');
//     p.innerHTML = JSON.stringify(element);
//     div.appendChild(p);
//     div.appendChild(button2);
//     div.appendChild(button3)
    
//     userDiv.appendChild(div);
//     document.body.appendChild(userDiv)
//    });
// }
// showUsers()








