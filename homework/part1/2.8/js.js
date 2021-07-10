"use strict"

//Преобразование типов
let taskStringPlusNumber = "" + 1 + 0;
let taskStringMinusNumber = "" -1 + 0;
let taskTruePlusFalse = true + false;
let taskNumnerDividedString = 6 / "3";
let taskStringTimesString = "2" * "3";
let taskNumberPlusString = 4 + 5 + "px";
let taskStringPlusNumber2 = "$" + 4 + 5;
let taskStringMinusNumber2 = "4" - 2;
let taskNumberDividedNullNumber = 7 / 0;
let taskStringPlusNumber3 = "  -9  " + 5;
let taskStringMinusNumber3 = "  -9  " - 5;
let taskNullPlusNumber = null + 1;
let taskUndefinedPlusNumber = undefined + 1;
let taskStringMinusNumber4 = "\t \n" -2;

//Исправьте сложение
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
//alert(a + b);
alert(+a + +b);