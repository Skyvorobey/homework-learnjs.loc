"use strict"

// TASK 1
// if (строка с нулём)
// Выведется ли alert?
// if ("0") {
//     alert( 'Привет' );
//   }
//Выведиться. Не выведиться 0, "", null, undefined и NaN


// TASK 2
//Название JavaScript
let questionWhatOfficialNameJS = prompt("Какое «официальное» название JavaScript?", '');

if (questionWhatOfficialNameJS == "ECMAScript") {
    alert("Правильно!");
}   else {
    alert("Не знаете? ECMAScript!");
}


//TASK 3
//Покажите знак числа
//Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// let promptEnterValue = prompt("Введите число", "");

// if(promptEnterValue < 0){
//     alert("-1");
// }   else if(promptEnterValue > 0){
//     alert("1");
// }   else {
//     alert("0");
// }


//TASK 4
//Перепишите 'if' в '?'
//Перепишите конструкцию if с использованием условного оператора '?':
let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

//let result = (a + b < 4) ? 'Мало' : 'Много';


//TASK 5
//Перепишите 'if..else' в '?'

//Перепишите if..else с использованием нескольких операторов '?'.
//Для читаемости рекомендуется разбить код на несколько строк.

let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let login = prompt("Вы 'Сотрудник' или 'Директор'? ", "");

// message = (login == 'Сотрудник') ? alert("Привет") :
//     (login == 'Директор') ? alert("Здравствуйте") :
//     (login == '') ? alert('Нет логина') : alert("");
