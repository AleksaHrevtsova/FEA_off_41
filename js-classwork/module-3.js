"use strict";
const obj = {};

let name;
name = "jhfsgh";

const newObject = {
  // properties
  name: "Sandra",
  age: 30,
  // methods
  toShowName() {
    return this.name;
  },
};
console.log(newObject);

// обращение к свойствам объекта
console.log(newObject.name, newObject.age);
console.log(newObject["age"]);

// вызов метода объекта
console.log(newObject.toShowName());

// изменение значения свойства объекта
newObject.name = "Aleksandra";
console.log(newObject);

newObject["age"] = 18;
console.log(newObject);

// добавление новых свойств
newObject.films = [];
console.log(newObject);

// удаление свойств
delete newObject.films;
console.log(newObject.films);
console.log(newObject);

// short props
const email = "aaaa@gmail.com";

const gameUser = {
  name: "Sonya",
  score: 100,
  //   email: email, // ES5
  email, // ES6
};
console.log(gameUser);

// перебор объекта
for (let key in gameUser) {
  console.log("gameUser: ", key);
}
for (let key in newObject) {
  console.log("newObject: ", key);
}

// способы преобразования данных объекта в массив
const studentsScore = {
  Vasya: 14,
  Petya: 22,
  Alyona: 24,
};

const keys = Object.keys(studentsScore);
console.log(keys);

const values = Object.values(studentsScore);
console.log(values);

const entries = Object.entries(studentsScore);
console.log(entries);

for (let el of entries) {
  console.log(el);
  console.log(`${el[0]}: ${el[1]}`);
}

// SPREAD - распыление
// with arrays
console.log(Math.min(1, 2, 3, 4));
console.log(Math.min(...values));
console.log(Math.max(...values));

const newKeysArr = keys.slice();
console.log(newKeysArr);

const spreadKeys = [...keys];
console.log(spreadKeys);

const keyAndVals = [...keys.slice(0, 1), "Js", ...entries, ...values];
console.log(keyAndVals);

// with objects
const fruits = {
  name: "fruits",
  fruitsCount: 22,
};
const vegs = {
  vegsCount: 24,
  name: "vegetables",
};

// old
const prods = Object.assign({}, fruits, vegs);
console.log("prods", prods);

// const prods = {
//     name: "",
//     count: ,
// }

// new
const spreadProds = { ...fruits, ...vegs, name: 2 };
console.log(spreadProds);

// REST - сбор
const db = [];
const scores = [];

function restArgs(email, ...args) {
  db.push(email);
  let total = 0;
  for (let el of args) {
    total += el;
    scores.push(el);
  }
  console.log(total);
}
restArgs("aaa@gmail.com", 1, 2, 3);
console.log(db);
console.log(scores);

// деструктуризация объектов
const destruct = {
  login: "login",
  pass: "javascript",
  obj1: {
    key1: 1,
    key2: {
      key3: 3,
      key4: 4,
    },
  },
};
console.log(destruct.login);
console.log(destruct.obj1.key1);
console.log(destruct.obj1.key2.key3);

let login = "ddd";

const { login: myLogin, pass, obj1 } = destruct;
console.log(myLogin);
console.log(obj1);

// дестр-я массивов

const black = [0, 1, 2];

const [red, green, blue] = black;

console.log(red);
console.log(green);
console.log(blue);
