"use strict";

// DATA TYPES

// PRIMITIVES
// 1 - String ("", '', ``)
let name = "Alisa";
name = "Lucia";
name = `Oleg`;
console.log(name);
console.log("Alisa");
console.log(typeof name);

const email = "ggg@gmail.com"; // об-е с иниц-ей
// const email = ggg@gmail.com; - не валидное значение
console.log(email);

// const number; - НЕЛЬЗЯ ТАК ДЕЛАТЬ!!!

// email = "GFGFG@mail.ru"; - НЕЛЬЗЯ ТАК ДЕЛАТЬ!!!

// 2 - undefined
let age; // объявление
console.log(age); // undefined
console.log(typeof age); // undefined

// 3 - number
age = 30; // инициализация
console.log(age);
console.log(typeof age); // number

age = 17;
console.log(age);
console.log(typeof age); // number

// 4 -boolean (true || false)
let isOpen = true;
console.log(isOpen);
console.log(typeof isOpen);

isOpen = false;
console.log(isOpen);
console.log(typeof isOpen);

// 5 - null
let badNews = null;
console.log(badNews);
console.log(typeof badNews); // !!object!!

// Интерполяция  `${variable}`  шаблонная строка
// console.log(`my name is ${name}`);
// console.log("my name is ${name}");
// console.log("my name is ${name}");

// Взаимодействие с пользователем
// 1
// let enteredName = prompt("Enter your name please");
// "" - Ok, null - Cancel
// console.log(enteredName);
// console.log(typeof enteredName);
// 2
// let msg = alert("Attention!");
// // undefined - Ok
// console.log(msg);
// 3
// let asking = confirm("А вам есть 18?");
// // true - Ok, false - Cancel
// console.log(asking);

// Mathematic operators
console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(3 / 3);

// возведение в степень
console.log(2 ** 3);
// остаток от деления
console.log(7 % 3); // 1
console.log(6 % 3); // 0

console.log(3 < 2); // false
console.log(3 > 2); // true

console.log(3 <= 3); // true
console.log(3 >= 3); // true

// строгое равенство и не равенство
//         number boolean
console.log(1 === true); // false
console.log(1 !== true); // true

// не строгое равенство и не равенство- логическое приведение типов
console.log(1 == true); // true
console.log(1 != true); // false

console.log(5 === "5"); // false
console.log(5 == "5"); // true

console.log(5 !== "5"); // true
console.log(5 != "5"); // false

// ПРЕОБРАЗОВАНИЕ ТИПОВ
// к числу
let stringVar = "5";
console.log(stringVar);
console.log(typeof stringVar);
// 1
stringVar = +stringVar;
console.log(stringVar);
console.log(typeof stringVar);

// 2
let strVar = true;
console.log(strVar);
console.log(typeof strVar);

strVar = Number(strVar);
console.log(strVar);
console.log(typeof strVar);

// к строке
let numberVar = 5;
console.log(numberVar);
console.log(typeof numberVar);
// 1
numberVar += ""; // numberVar = numberVar +"";
console.log(numberVar);
console.log(typeof numberVar);
console.log(5 + "5" + 5); // 555
console.log(5 + 5 + "5"); // 105
console.log("5" + 5 + 5 + "5"); // 5555
console.log("5" + 5 + 5); // 555

// к булю
let boolVar = 1;
console.log(boolVar);
console.log(typeof boolVar);

boolVar = Boolean(boolVar);
console.log(boolVar); // true
console.log(typeof boolVar); // boolean

boolVar = 5;
console.log(boolVar);
console.log(typeof boolVar);
boolVar = Boolean(boolVar);
console.log(boolVar); // true
console.log(typeof boolVar); // boolean

boolVar = -1;
console.log(boolVar);
console.log(typeof boolVar);
boolVar = Boolean(boolVar);
console.log(boolVar); // true
console.log(typeof boolVar); // boolean

boolVar = Infinity;
console.log(boolVar);
console.log(typeof boolVar);
boolVar = Boolean(boolVar);
console.log(boolVar); // true
console.log(typeof boolVar); // boolean

boolVar = " "; // ТУТ ПРОБЕЛ ЕСТЬ!!!
console.log(boolVar);
console.log(typeof boolVar);
boolVar = Boolean(boolVar);
console.log(boolVar); // true
console.log(typeof boolVar); // boolean

// 6 falsy значений
// 1
boolVar = "";
console.log(boolVar);
console.log(typeof boolVar);
boolVar = Boolean(boolVar);
console.log(boolVar); // false
console.log(typeof boolVar); // boolean
// 2
boolVar = 0;
console.log(boolVar);
console.log(typeof boolVar);
boolVar = Boolean(boolVar);
console.log(boolVar); // false
console.log(typeof boolVar); // boolean
// 3
boolVar = undefined;
console.log(boolVar);
console.log(typeof boolVar);
boolVar = Boolean(boolVar);
console.log(boolVar); // false
console.log(typeof boolVar); // boolean
// 4
boolVar = null;
console.log(boolVar);
console.log(typeof boolVar);
boolVar = Boolean(boolVar);
console.log(boolVar); // false
console.log(typeof boolVar); // boolean
// 5
boolVar = NaN; // Not a Number
console.log(boolVar);
console.log(typeof boolVar);
boolVar = Boolean(boolVar);
console.log(boolVar); // false
console.log(typeof boolVar); // boolean
// 6
boolVar = false; // Not a Number
console.log(boolVar);
console.log(typeof boolVar);
boolVar = Boolean(boolVar);
console.log(boolVar); // false
console.log(typeof boolVar); // boolean

let z = "hgvcfhaw";

z = +z;
console.log(z); // NaN

z = Boolean(z);
console.log(z); // false

// 0.1 + 0.2

console.log(0.1 + 0.2); // 0.30000000000000004
console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

console.log(Math.floor(1.1)); // 1
console.log(Math.floor(1.5)); // 1
console.log(Math.floor(1.9)); // 1

console.log(Math.ceil(1.1)); // 2
console.log(Math.ceil(1.5)); // 2
console.log(Math.ceil(1.9)); // 2

console.log(Math.round(1.1)); // 1
console.log(Math.round(1.1)); // 1
console.log(Math.round(1.5)); // 2
console.log(Math.round(1.9)); // 2

// console.log(Math.random().toFixed(4)); // рандом число от 0 до 1
console.log(Math.floor(Math.random() * ( 10000 - 1) + 1));