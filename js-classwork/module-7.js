const logoLink = document.querySelector("a");
console.log(logoLink);
console.log(logoLink.classList);

logoLink.classList.add("logo");
console.log(logoLink.classList);
console.dir(logoLink);

logoLink.classList.add("isOpen", "hhh");
console.log(logoLink.classList);
console.dir(logoLink);

logoLink.classList.remove("hhh");
console.log(logoLink.classList);
console.dir(logoLink);

logoLink.classList.replace("isOpen", "hhh");
console.log(logoLink.classList);
console.dir(logoLink);

const btn = document.querySelector(".btn");
console.log(btn);
btn.addEventListener("click", () => {
  //   logoLink.style.display = "none";
  logoLink.classList.toggle("toggleSoroka");
  logoLink.textContent = "FEoffline-41";
});
console.log(btn);

const list = document.querySelector('[data-action="action"]');
const header = document.querySelector("header");

// add new elements
const elem1 = document.createElement("li");
console.dir(elem1);
elem1.textContent = "React";

const elem2 = document.createElement("li");
console.dir(elem2);
elem2.textContent = "NODE";

list.appendChild(elem1, elem2);
header.style.border = "1px solid";

const title1 = `<h2 class="header-title">TITLE-1</h2>`;
const title2 = `<h2 class="header-title">TITLE-2</h2>`;
const title3 = `<h2 class="header-title">TITLE-3</h2>`;
const title4 = `<h2 class="header-title">TITLE-4</h2>`;
// console.dir(title);
header.insertAdjacentHTML("afterbegin", title1);
header.insertAdjacentHTML("beforebegin", title2);
header.insertAdjacentHTML("afterend", title3);
header.insertAdjacentHTML("beforeend", title4);

// header.innerHTML = '';
list.removeChild(elem1);

const title1Double = document.querySelector(".header-title");
// title1Double.remove();
// header.removeChild(title1Double);

const item = document.createElement("li");
const nameItem = document.createElement("h3");
const imgItem = document.createElement("img");
const deskItem = document.createElement("p");
deskItem.textContent = "Lorem ipsum";
imgItem.setAttribute(
  "src",
  "data:image/jpeg;base64,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"
);
nameItem.textContent = "Product";
console.log(nameItem);
console.log(imgItem);
console.log(deskItem);

item.append(nameItem, imgItem, deskItem);
list.append(item);

const cloneItem = item.cloneNode(true);
console.dir(cloneItem);
cloneItem.childNodes[0].textContent = "Clone Product";

list.append(cloneItem);
imgItem.src =
  "data:image/jpeg;base64,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";
item.childNodes[2].style.display = "none";