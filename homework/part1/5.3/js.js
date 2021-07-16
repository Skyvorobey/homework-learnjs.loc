"use strict"

//TASK1 Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. 

function usFirst(str) {
  let newStr;
  return newStr = str[0].toUpperCase() + str.slice(1);
}

//TASK2 Напишите функцию checkSpam(str), возвращающую true, 
//если str содержит 'viagra' или 'XXX', а иначе false.

const checkSpam = function(str) {
  let newStr = str.toLowerCase();

  if (newStr.includes("viagra") || newStr.includes("xxx")){
    return true;
  } else  {
    return false;
  }

}

//TASK3 Создайте функцию truncate(str, maxlength), 
//которая проверяет длину строки str и, 
//если она превосходит maxlength, 
//заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

const truncate = function (str, maxlength) {
  if(str.length > maxlength) {
    return str.substr(0, maxlength - 1) + "…";
  } else {
    return str;
  }
}


//TASK4 Создайте функцию extractCurrencyValue(str), 
//которая будет из такой строки выделять числовое значение 
//и возвращать его.

const extractCurrencyValue = function (str) {
  return +str.slice(1);
}