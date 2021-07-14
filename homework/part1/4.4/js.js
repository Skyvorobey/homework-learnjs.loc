"use strict"

//TASK1 Создайте объект calculator (калькулятор) с тремя методами:

//read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
//sum() (суммировать) возвращает сумму сохранённых значений.
//mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {};

calculator.read = function(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
}

calculator.sum = function() {
  return this.num1 + this.num2;
}

calculator.mul = function() {
  return this.num1 * this.num2;
}

//+ sub() and div()

calculator.sub = function() {
  return this.num1 - this.num2;
}

calculator.div = function(){
  if (this.num2 === 0) {
    return "На ноль делить нельзя!";
  } else {
    return this.num1 / this.num2;
  }
}


//TASK2 Это ladder (лестница) – 
//объект, который позволяет подниматься вверх и спускаться:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };

//Теперь, если нам нужно сделать несколько последовательных вызовов, 
//мы можем выполнить это так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

//Измените код методов up, down и showStep таким образом, 
//чтобы их вызов можно было сделать по цепочке, например так:
//ladder.up().up().down().showStep(); // 1

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};