"use strict";

// // DATA TYPES

// // PRIMITIVES
// // 1 - String ("", '', ``)
// let name = "Alisa";
// name = "Lucia";
// name = `Oleg`;
// console.log(name);
// console.log("Alisa");
// console.log(typeof name);

// const email = "ggg@gmail.com"; // об-е с иниц-ей
// // const email = ggg@gmail.com; - не валидное значение
// console.log(email);

// // const number; - НЕЛЬЗЯ ТАК ДЕЛАТЬ!!!

// // email = "GFGFG@mail.ru"; - НЕЛЬЗЯ ТАК ДЕЛАТЬ!!!

// // 2 - undefined
// let age; // объявление
// console.log(age); // undefined
// console.log(typeof age); // undefined

// // 3 - number
// age = 30; // инициализация
// console.log(age);
// console.log(typeof age); // number

// age = 17;
// console.log(age);
// console.log(typeof age); // number

// // 4 -boolean (true || false)
// let isOpen = true;
// console.log(isOpen);
// console.log(typeof isOpen);

// isOpen = false;
// console.log(isOpen);
// console.log(typeof isOpen);

// // 5 - null
// let badNews = null;
// console.log(badNews);
// console.log(typeof badNews); // !!object!!

// // Интерполяция  `${variable}`  шаблонная строка
// // console.log(`my name is ${name}`);
// // console.log("my name is ${name}");
// // console.log("my name is ${name}");

// // Взаимодействие с пользователем
// // 1
// // let enteredName = prompt("Enter your name please");
// // "" - Ok, null - Cancel
// // console.log(enteredName);
// // console.log(typeof enteredName);
// // 2
// // let msg = alert("Attention!");
// // // undefined - Ok
// // console.log(msg);
// // 3
// // let asking = confirm("А вам есть 18?");
// // // true - Ok, false - Cancel
// // console.log(asking);

// // Mathematic operators
// console.log(2 + 3);
// console.log(2 - 3);
// console.log(2 * 3);
// console.log(3 / 3);

// // возведение в степень
// console.log(2 ** 3);
// // остаток от деления
// console.log(7 % 3); // 1
// console.log(6 % 3); // 0

// console.log(3 < 2); // false
// console.log(3 > 2); // true

// console.log(3 <= 3); // true
// console.log(3 >= 3); // true

// // строгое равенство и не равенство
// //         number boolean
// console.log(1 === true); // false
// console.log(1 !== true); // true

// // не строгое равенство и не равенство- логическое приведение типов
// console.log(1 == true); // true
// console.log(1 != true); // false

// console.log(5 === "5"); // false
// console.log(5 == "5"); // true

// console.log(5 !== "5"); // true
// console.log(5 != "5"); // false

// // ПРЕОБРАЗОВАНИЕ ТИПОВ
// // к числу
// let stringVar = "5";
// console.log(stringVar);
// console.log(typeof stringVar);
// // 1
// stringVar = +stringVar;
// console.log(stringVar);
// console.log(typeof stringVar);

// // 2
// let strVar = true;
// console.log(strVar);
// console.log(typeof strVar);

// strVar = Number(strVar);
// console.log(strVar);
// console.log(typeof strVar);

// // к строке
// let numberVar = 5;
// console.log(numberVar);
// console.log(typeof numberVar);
// // 1
// numberVar += ""; // numberVar = numberVar +"";
// console.log(numberVar);
// console.log(typeof numberVar);
// console.log(5 + "5" + 5); // 555
// console.log(5 + 5 + "5"); // 105
// console.log("5" + 5 + 5 + "5"); // 5555
// console.log("5" + 5 + 5); // 555

// // к булю
// let boolVar = 1;
// console.log(boolVar);
// console.log(typeof boolVar);

// boolVar = Boolean(boolVar);
// console.log(boolVar); // true
// console.log(typeof boolVar); // boolean

// boolVar = 5;
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // true
// console.log(typeof boolVar); // boolean

// boolVar = -1;
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // true
// console.log(typeof boolVar); // boolean

// boolVar = Infinity;
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // true
// console.log(typeof boolVar); // boolean

// boolVar = " "; // ТУТ ПРОБЕЛ ЕСТЬ!!!
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // true
// console.log(typeof boolVar); // boolean

// // 6 falsy значений
// // 1
// boolVar = "";
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // false
// console.log(typeof boolVar); // boolean
// // 2
// boolVar = 0;
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // false
// console.log(typeof boolVar); // boolean
// // 3
// boolVar = undefined;
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // false
// console.log(typeof boolVar); // boolean
// // 4
// boolVar = null;
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // false
// console.log(typeof boolVar); // boolean
// // 5
// boolVar = NaN; // Not a Number
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // false
// console.log(typeof boolVar); // boolean
// // 6
// boolVar = false; // Not a Number
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // false
// console.log(typeof boolVar); // boolean

// let z = "hgvcfhaw";

// z = +z;
// console.log(z); // NaN

// z = Boolean(z);
// console.log(z); // false

// // 0.1 + 0.2

// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

// console.log(Math.floor(1.1)); // 1
// console.log(Math.floor(1.5)); // 1
// console.log(Math.floor(1.9)); // 1

// console.log(Math.ceil(1.1)); // 2
// console.log(Math.ceil(1.5)); // 2
// console.log(Math.ceil(1.9)); // 2

// console.log(Math.round(1.1)); // 1
// console.log(Math.round(1.1)); // 1
// console.log(Math.round(1.5)); // 2
// console.log(Math.round(1.9)); // 2

// // console.log(Math.random().toFixed(4)); // рандом число от 0 до 1
// console.log(Math.floor(Math.random() * ( 10000 - 1) + 1));

// MODULE 1 PART 2
let name = "Soroka";

if (name === "Soroka") {
  console.log(`Hello`);
} else {
  console.log("Bye!");
}

// TERNARY OPERATOR - альтернатива if...else
name === "Soroka" ? console.log(`Hello`) : console.log("Bye!");

let bet = 30;
bet = "";
if (bet > 0 && bet < 10) {
  console.log(`You win nothing`);
} else if (bet >= 10 && bet < 20) {
  console.log("You win something");
} else {
  console.log("You win all");
}

// Logical operator
// логическое НЕ
console.log(!true);
console.log(!!true);
console.log(!!!true);

// && - логическое и -
// возвращает последнее трушное значение или первое ложное
console.log(true && 1 && "Dima"); // Dima
//          true && true && true

console.log(1 && true && "Nataly" && Infinity);
//         true && true && true && true

console.log(true && 1);
//         true && true

console.log(1 && true && "" && NaN); // empty
//         true && true && false && false

console.log(1 && true && NaN && ""); // empty
//         true && true && false && false

// || - логическое или
console.log(true || 1 || "Dima"); // true
//          true || true || true

console.log(1 || true || "Nataly" || Infinity); // 1
//         true || true || true || true

console.log(true || 1); // true
//         true || true

console.log(false || 0 || "" || NaN); // NaN
//         false || false || false || false

console.log(0 || NaN); // NaN
//      false || false

// 12 < age < 18
let age = 122;
if (age <= 12) {
  console.log(`children`);
} else if (age > 12 && age < 18) {
  console.log(`teens`);
} else {
  console.log(`others`);
}

let allergen = "oranges";
allergen = "cucumber";

if (allergen === "bananas" || allergen === "oranges") {
  console.log(`I don't want to eat it!!!!`);
} else {
  console.log(`Yes, I like it!!`);
}

// let day = prompt("Enter the day please");

// if (
//   day === "пн" ||
//   day === "вт" ||
//   day === "ср" ||
//   day === "чт" ||
//   day === "пт"
// ) {
//   console.log(`будний день`);
// } else if (day === "сб" || day === "вс") {
//   console.log(`выходной день`);
// } else {
//   console.log(`Enter valid data!`);
// }

// switch (day) {
//   case "пн":
//     console.log(`будний день`);
//   break;

//   case "вт":
//     console.log(`будний день`);
//   break;

//   case "ср":
//     console.log(`будний день`);
//   break;

//   case "чт":
//     console.log(`будний день`);
//   break;

//   case "пт":
//     console.log(`будний день`);
//   break;

//   case "сб":
//     console.log(`выходной день`);
//   break;

//   case "вс":
//     console.log(`выходной день`);
//   break;

//   default:
//     console.log(`ерунда какая-то`);
//   break;
// }

// сокращенная запись
// switch (day) {
//   case "пн":
//   case "вт":
//   case "ср":
//   case "чт":
//   case "пт":
//     console.log(`будний день`);
//     break;

//   case "сб":
//   case "вс":
//     console.log(`выходной день`);
//     break;

//   default:
//     console.log(`ерунда какая-то`);
//     break;
// }

// ЦИКЛЫ
let a = 31;
// цикл с предусловием
// while (a > 10 && a < 20) {
//   //   console.log("Before", a);
//   a += 1;
//   //   console.log("After", a);
// }

// цикл с постусловием
// do {
// //   console.log("Before", a);
//   a += 1;
// //   console.log("After", a);
// } while (a > 10 && a < 20);
console.log("total value", a);

// цикл со счетчиком (i || j || k)
let sum = 0;
console.log(sum);
console.log(typeof sum);
//   нач зн-е; условие; шаг итерации
for (let i = 1; i <= 5; i = i + 1) {
  // i++ || i += 1
  sum = sum + i;
  // 0 = 0 + 1 => 1
  // 1 = 1 + 2 => 3
  // 3 = 3 + 3 => 6
  // 6 = 6 + 4 => 10
  // 10 = 10 + 5 => 15
  console.log("итерация цикла for", i, sum);
}
console.log(sum);

// break & continue

for (let j = 1; j < 555; j++) {
  if (j === 5) {
    console.log(`BREAK`);
    break;
  }
  console.log("before BREAK", j);
}

let globalFish = 10;
console.log("globalFish", globalFish);

for (let j = 1; j < 5; j++) {
  console.log("LOCAL", j);
  console.log("globalFish", globalFish);
  if (j === 3) {
    let hhh = 12;
    console.log("LOCAL", j);
    console.log("globalFish", globalFish);
    console.log(`CONTINUE`);
    continue;
  }
  console.log(hhh);
  console.log("before CONTINUE", j);
}
console.log("LOCAL", j);
