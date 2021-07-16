"use strict"

//TASK1 Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) 
//и после показывает их сумму.

const showNumber = function () {
  let num1 = +prompt("введите число 1", "");
  let num2 = +prompt("введите число 2", "");

  if (isFinite(num1) && isFinite(num2) ) {
    alert(num1 + num2);
  } 
  
}


//TASK2 Создайте функцию readNumber, которая будет запрашивать ввод числового значения 
//до тех пор, пока посетитель его не введёт.

//Функция должна возвращать числовое значение.

//Также надо разрешить пользователю остановить процесс ввода, 
//отправив пустую строку или нажав «Отмена». 
//В этом случае функция должна вернуть null.

const readNumber = function() {
  let num;
  do {
    num = prompt("Введите числовое значение", "");
  } while (!isFinite(num)){
    
    if(num == null || ''){
      return +num;
    }
  }
}

readNumber();


//Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

const random = function (min, max) {
  return min + Math.random() * (max - min);
}


//Напишите функцию randomInteger(min, max), 
//которая генерирует случайное целое (integer) число от min до max (включительно).

//Любое число из интервала min..max должно появляться с одинаковой вероятностью.

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
