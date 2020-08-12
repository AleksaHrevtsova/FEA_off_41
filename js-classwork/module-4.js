// Функции высшего порядка
function mainFunc(callback1, callback2) {
  callback1();
  callback2();
}
// mainFunc(showGreet1);
function showGreet1() {
  console.log(`Hello World!`);
}

function showGreet2() {
  console.log(`Hello!`);
}

mainFunc(showGreet1, showGreet2);

// example
const user1 = {
  name: "User1",
  email: "email@email.com",
  phone: "000 00 00 000",
};

const user2 = {
  name: "User2",
  email: "email@email.com",
  phone: "000 00 00 000",
};

function greetUser(manager, position) {
  console.log(
    `${this.name}, hello! My name is ${manager}, position - ${position}`
  );
}

greetUser.call(user1, "Bob", "junior");
greetUser.apply(user2, ["John", "junior"]);

// function getScore(arr) {
//   let newArr = [];
//   for (let el of arr) {
//     console.log(el);
//     newArr.push(el * 2);
//   }
//   return console.log(newArr);
// }
// getScore([1, 2, 3]);

// Main func
function getScore(func, arr) {
  func(arr);
}

// Куча разных колбэков
function updateArr1(arr) {
  let newArr = [];
  for (let el of arr) {
    newArr.push(el + 1);
  }
  return console.log(newArr);
}
function updateArr2(arr) {
  let newArr = [];
  for (let el of arr) {
    newArr.push(el * 5);
  }
  return console.log(newArr);
}
function updateArr3(arr) {
  let newArr = [];
  for (let el of arr) {
    newArr.push(el ** 5);
  }
  return console.log(newArr);
}

// куча разных сущностей
const arr1 = [1, 2, 4, 6];
const arr2 = [11, 22, 34, 36];
const arr3 = [111, 222, 334, 364];

// вызовы главной функции (высшего порядка)
getScore(updateArr1, arr1);
getScore(updateArr2, arr2);
getScore(updateArr3, arr3);

getScore((arr) => {
  console.log(`Анонимная колбэк-функция`);
  console.log(arr);
}, arr1);

const arrFunc = (arr) => {
  const newArr = [];
  for (let el of arr) {
    newArr.push((el += 1));
  }
  return console.log(
    "новый массив из преобразованных элементов массива из параметров",
    newArr
  );
};
console.log(`исходный массив`, arr2);
arrFunc(arr2);

// Stack

function first() {
  console.log("начала выполняться 1я функция");
  console.log("закончила выполняться 1я функция");
}

function second() {
  console.log("начала выполняться 2я функция");
  first();
  console.log("закончила выполняться 2я функция");
}

function third() {
  console.log("начала выполняться 3я функция");
  second();
  console.log("закончила выполняться 3я функция");
}

function bigFunc() {
  console.log("начала выполняться BIG функция");
  third();
  console.log("закончила выполняться BIG функция");
}

// bigFunc();

// CLOSURE

function productCounter() {
  let count = 1;
  console.log(count);

  function moreCount(val) {
    count += val;
    console.log(count);
  }
  function lessCount(val) {
    count -= val;
    if (count > 0) {
      count -= val;
    }
    console.log("Error");
  }
  return { moreCount, lessCount };
}

const count1 = productCounter();
console.log(count1);

count1.moreCount(5);
count1.lessCount(7);
// productCounter();

// count = 2;
// console.log(count);

let name = "dfgs";

const product = {
  name: "apple",
  toShowName() {
    return this.name;
  },
};

product.toShowName();

function toBuyProducts(cbFunc) {
  //   cbFunc();
  let prod = cbFunc();
  console.log(`I want to buy ${prod}`);
}

toBuyProducts(product.toShowName.bind(product));
