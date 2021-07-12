"use strict"


//TASK1 Перепишите функцию, используя оператор '?' или '||'
//функция
function checkAge(age) {
   if (age > 18) {
     return true;
   } else {
     return confirm('Родители разрешили?');
   }
 }

//Решение1 " || "
function checkAge1(age) {
   return (age > 18) || confirm('Родители разрешили?')
}


 //Решение2 " ? " 
function checkAge2(age) {
   return (age > 18) ? true : confirm('Родители разрешили?');
}
 

//TASK2 Функция min(a, b) Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b
function min(a, b) {
   if(a > b){
      return b;
   } else {
      return a;
   }
}

function min2(a, b){
   return (a > b) ? b : a;
}


//TASK3 Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
//P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

function pow(x, n){
   if(x && n > 0) {
      return x ** n;
   } else {
      return "Число должно быть натуральным";
   }
}

function pow2(x, n) {
   return (x && n > 0) ? x ** n : "Число должно быть натуральным";
}
