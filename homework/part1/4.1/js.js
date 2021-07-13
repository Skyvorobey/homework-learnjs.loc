"use strict"

//TASK1 Напишите код, выполнив задание из каждого пункта отдельной строкой:

//     Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.

const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


//TASK2 Напишите функцию isEmpty(obj), 
//которая возвращает true, если у объекта нет свойств, 
//иначе false.

const objWithOutValue = {};


const isEpty = function(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

//console.log(isEpty(user));
//console.log(isEpty(objWithOutValue));


//TASK2  У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.


const showSumAllSalaries = function(salaries) {
  let sum = 0;
  for(let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}

//console.log(showSumAllSalaries(salaries));


//TASK3 Создайте функцию multiplyNumeric(obj), 
//которая умножает все числовые свойства объекта obj на 2.

//Обратите внимание, что multiplyNumeric не нужно ничего возвращать. 
//Следует напрямую изменять объект.

//P.S. Используйте typeof для проверки, что значение свойства числовое.

const multiplyNumeric = function(obj) {
  for(let value in obj){
    if(typeof(obj[value]) == 'number') {
      obj[value] *= 2;
    }
  }
}

//multiplyNumeric(salaries);