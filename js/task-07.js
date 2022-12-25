// Напиши скрипт, який реагує на зміну значення input#font - size - control
//     (подія input) і змінює інлайн - стиль span#text, оновлюючи
// властивість font - size.

// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const userInput = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

// const minSymbolNumber = Number(userInput.getAttribute("min"));
// const maxSymbolNumber = Number(userInput.getAttribute("max"));
//console.log(typeof(minSymbolNumber));

const sizeControl = (evt) => {
  textEl.style.fontSize = userInput.value + "px";
  // console.log(userInput.value);
};

userInput.addEventListener("input", sizeControl);
