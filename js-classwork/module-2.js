// const name = "vjhds ! gfh";
// console.log(name.length);

// const newArray = [[1, 2, 3], 4, "Js"];
// console.log(newArray);

// console.log(newArray[0]);
// console.log(newArray[1]);
// console.log(newArray[2]);
// console.log(newArray[3]);

// newArray.length = 5;
// console.log(newArray);

// newArray.length = 2;
// console.log(newArray);

// newArray[1] = "Js";
// console.log(newArray);

// newArray[0][0] = "HTML";

// newArray[2] = "React";
// console.log(newArray);

// // итерация по массиву

// const nums = [1, 2, 3, 4, 5];
// for (let i = 1; i < nums.length; i += 2) {
//   console.log(`${i}: ${nums[i]}`);
// }

// const newNums = [
//   [1, 2, 3, 4, 5],
//   [1, 2, 3, 4, 5],
//   [1, 2, 3, 4, 5],
// ];

// for (const elem of newNums) {
//   console.log("element", elem);
//   for (let innerEl of elem) {
//     console.log(innerEl);
//   }
// }

// // присвоение значений разных типов

// let alpha = 33;
// let beta = alpha;

// console.log(alpha === beta);
// alpha = 44;
// console.log(alpha === beta);

// const defaultArr = ["a", "b", "c"];
// const copyArr = defaultArr;
// console.log(`defaultArr === copyArr`, defaultArr === copyArr);

// copyArr[3] = "d";
// console.log(`defaultArr === copyArr`, defaultArr === copyArr);
// console.log(`defaultArr`, defaultArr);
// console.log(`copyArr`, copyArr);

// // копирование элементов массива
// const sliceArray = defaultArr.slice(1, 3);
// console.log(sliceArray);
// console.log("исходный", defaultArr);

// const newSliceArr = defaultArr.slice(-3);
// console.log(newSliceArr);
// console.log("исходный", defaultArr);

// // преобразование массив <=> строка
// const str = "I ! Love ! Js";
// const arrFromStr = str.split("!");
// console.log(arrFromStr);

// const ar = [1, 2, 3, 4];
// const joinStr = ar.join("=");
// console.log(joinStr);

// console.log(ar.includes(1)); // true
// console.log(ar.includes("1")); // false

// console.log(ar.indexOf(1)); // 0
// console.log(ar.indexOf("1")); // -1

// // швейцарский нож!!
// const spliceArray = [2, 4, 6, 8, 10];
// console.log(`spliceArray`, spliceArray);

// // delete
// const delSplice = spliceArray.splice(2, 1);
// console.log(`delSplice`, delSplice);
// console.log(`spliceArray`, spliceArray);

// // add new els
// const addSplice = spliceArray.splice(4, 0, "Js", "CSS");
// console.log(`upSplice`, addSplice);
// console.log(`spliceArray`, spliceArray);

// // replace
// const updSplice = spliceArray.splice(0, 2, "Js", "CSS");
// console.log(`upSplice`, updSplice);
// console.log(`spliceArray`, spliceArray);

// const first = ["a", "b", "c"];
// const second = [1, 2, 3];
// const third = [1, 2, 3];
// const concatArr = second.concat(first, third);
// console.log(concatArr);

// Module 2.2

// function expression
// объявление
// funcExpres();
const funcExpres = function (a, b, c = 0) {
  console.log(`Hello people!`);
  return console.log(a + b + c);
};
// вызов - призыв к действию
funcExpres(1, 2, 5);

// arrow fucntion
const arrowFunc = (...args) => console.log("args", args);
arrowFunc(1, 2, 3);

// function declaration
// объявление
funcDecl(16, "Hello!", "Sandra");
function funcDecl(name, age, greet) {
  console.log(`${greet}! My name is ${name}, I am ${age}`);
}
// вызов - призыв к действию
const arr = [1, 2, 3];
console.log(arr);
// псевдомассив arguments
const grandTotal = function () {
  // console.log(arguments);
  const normalArr = Array.from(arguments);
  console.log(normalArr);
  let total = 0;
  for (let el of arguments) {
    // total = total + el;
    console.log(el);
    total += el;
  }
  console.log(total);
};
// grandTotal(arr);
grandTotal(1, 2, 3);
const b = "1, 2, 3";
const newArr = Array.from(b);
// console.log(newArr);

let emails = [];
const numbers = [];
let scores = [];

function tests(par1, par2, ...args) {
  emails.push(par1);
  numbers.push(par2);
  console.log("args", args);
}
console.log("emails", emails);
console.log("numbers", numbers);
// tests("aaa@gmail.com", "xxx-xxx-xx-xx", 1, 0, 1, 1);
tests("bbb@gmail.com", 1, 0, 0, 1);
// tests("ccc@gmail.com", 1, 1, 1, 1);
// tests("ddd@gmail.com", 1, 0, 0, 0);

// guard clause
const showNums = function (num) {
  // full
  if (num % 2 === 0) {
    console.log(num);
  } else {
    console.log(`Error`);
  }
  //extract
  if (num % 2 === 0) return console.log(num);
  return console.log(`Error`);
};
showNums(1);
showNums(2);

const withArguments = function (a, d) {
  console.log(arguments);
  console.log(a);
  console.log(d);
};
withArguments(1, 2, 3);

