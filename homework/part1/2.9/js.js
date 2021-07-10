"use strict"

//Операторы сравнения

let taskComparisonNumberMoreNumber = 5 > 4; //true
let taskComparisonStringMoreString = "ананас" > "яблоко"; //false (check unicode)
let taskComparisonStringMoreString2 = "2" > "12"; //true (checking the first character)
let taskComparisonEasyUndefinedAndNull = undefined == null; // true (conversion to number)
let taskComparisonHighUndefinedAndNull = undefined === null; //false (different types)
let taskComparisonNullAndString = null == "\n0\n"; // false (null is == to Undefine)
let taskComparisonNullAndString2 = null === +"\n0\n"; //false (different types)