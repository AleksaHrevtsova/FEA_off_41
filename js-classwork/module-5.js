"use strict";
// // Процедурный (не связанный) код
// const test1 = 16;
// // ==========================
// const test2 = 22;
// // ==========================
// const test3 = 23;
// // ==========================
// const score = (test1, test2, test3) => {
// // с указаниями параметров
//   return console.log(test1 + test2 + test3);
// };

// score(test1, test2, test3);

// // Объектно-ориентированное программирование (ООП)
// const totalScore = {
//   test1: 16,
//   test2: 22,
//   test3: 23,
//   toGetSum() {
//     // без указания параметров
//     return this.test1 + this.test2 + this.test3;
//   },
// };
// console.log(totalScore.toGetSum());

// КЛАССЫ - структура, описывающая состояние и поведение сущности

// ЭКЗЕМПЛЯРЫ - объекты-представители сущности

// ИНТЕРФЕЙС - набор свойств и методов класса

// ПАРАДИГМЫ: инкапсуляция, абстракция, наследование, полиморфизм

// ИНКАПСУЛЯЦИЯ - сокрытие деталей реализации от пользователя

// АБСТРАКЦИЯ - выделение значимых характеристик

// НАСЛЕДОВАНИЕ - создание новой сущности на базе существующей

// ПОЛИМОРФИЗМ - переопределение методов базового класса в наследниках

// КОНСТРУКТОРЫ
// Функции - конструкторы (оператор new), !кроме стрелочных!
// именуются с Заглавной буквы
// встроенные в Js конструкторы: Object, Array, Number, String, Boolean
// 1 ----
// объявление
const Soroka = function (a, b, c, d = 0, e = "red") {
  this.name = a; // свойство, запишется в тело объекта
  this.model = b; // свойство, запишется в тело объекта
  this.price = c; // свойство, запишется в тело объекта
  this.weight = d; // свойство, запишется в тело объекта
  this.color = e; // свойство, запишется в тело объекта
  this.rrr = "rrr"; // свойство, запишется в тело объекта

  this.greeting = function () {
    // метод, запишется в тело объекта
    console.log("Hello Js");
  };
};
// console.log(Soroka.prototype);

// ПРОТОТИПЫ, прототипное наследование свойство [[Prototype]]
// в консоли - __proto__
// свойство наследуется от прототипа, только если такого нет в потомке,
// если есть, то используется без обращения к такому же свойству родителя
Soroka.prototype.propsMethod = function () {
  // добавляем метод в ф-к,
  // чтобы его могли использовать все экземпляры
  console.log("Hello World");
};
// __proto__ изменять нельзя, но методы для этого существуют)

// внутренние методы
// [[Call]] - при вызове функции без new, просто выполнится тело функции
// [[Construct]] - при вызове функции c new, создастся новый объект

// вызов
const sorokaBeloboka = new Soroka("JavaScript", "ES5", 100000);
console.log(sorokaBeloboka);

console.log(
  "сравнение прототипа экземпляра и объекта функции-конструктора: ",
  sorokaBeloboka.__proto__ === Soroka.prototype
); // true

// вызовы методов экземпляра
sorokaBeloboka.greeting();
sorokaBeloboka.propsMethod();

// // задание прототипа при создании нового объекта
// const cat = Object.create(animal); // __proto__ от animal и от Object
// console.log("initialise", cat);

// // перебор личных (не наследуемых) свойств объекта
// const parentProd = { color: "red", count: 7 };
// const childProd = Object.create(parentProd);
// childProd.price = 30;

// for (const key in childProd) {
//   console.log("__proto__ key: ", key); // вернет все унаследованные ключи
// }

// for (const key in childProd) {
//   if (!childProd.hasOwnProperty(key)) continue; // вернет только личные ключи
//   console.log("own property: ", key);
// }

// ОБЪЯВЛЕНИЕ ES6 класса
class SorokaES6 {
  // СТАТИЧЕСКИЕ СВОЙСТВА И МЕТОДЫ - не идут в prototype
  // не работает в браузерах, кроме Хрома (от 74 версии)

  // доступны только конструктору
  static staticProp = "abc";
  static staticMethod() {
    console.log(`Static Method`);
  }
  // доступны только конструктору
  constructor(a, b, c, d = 4000, e = "red") {
    this._name = a;
    this.model = b;
    this.price = c;
    this.weight = d;
    this.color = e;
    this.rrr = "rrr";
  }
  // ПУБЛИЧНЫЕ СВОЙСТВА И МЕТОДЫ (public class fields)
  // на экземпляр, не в prototype, не нужно привязывать контекст
  publicProp = 5;
  publicMethod = (amount) => {
    this.xp += amount;
    console.log(this.xp);
  };
  // на экземпляр, не в prototype, не нужно привязывать контекст

  // эти методы запишутся в свойство prototype
  greeting() {
    console.log("Hello Js");
  }

  toShowWeight() {
    console.log(this.weight);
  }

  // // ГЕТТЕРЫ И СЕТТЕРЫ - применяются для внешнего доступа к методам объекта
  // // имя одно для гета и сета, не должно совпадать со именами св-в экземляров
  // // применяются в разработке, когда имена свойств могут меняться, согласно изменений спецификации
  // // а имена геттеров и сеттеро останутся неизменными

  // только показывает значение
  get name() {
    return console.log(this._name);
  }
  // метод, изменяющий значения свойства
  set name(value) {
    return console.log((this._name = value));
  }
}
const sorokaBelobokaES6 = new SorokaES6("JavaScript", "ES5", 100000);
console.log(sorokaBelobokaES6);

// вызов геттера, который выводит всегда только значение
sorokaBelobokaES6.name;
console.log(sorokaBelobokaES6.weight); // обращение напрямую к свойству

sorokaBelobokaES6.toShowWeight(); // вызов метода объекта, выводящего значение свойства

// НАСЛЕДОВАНИЕ
class SuperSoroka extends SorokaES6 {
  constructor() {
    super();
    this.newProp = "New Prop";
  }
  newSuperMethod() {
    console.log(`Super New Method`);
  }
}

const superSoroka = new SuperSoroka();
console.log(superSoroka);
