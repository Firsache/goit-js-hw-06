// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input), підставляє його поточне значення
// в span#name - output.Якщо інпут порожній, у спані повинен відображатися
// рядок "Anonymous".

const inputNameEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

inputNameEl.addEventListener("input", (evt) => {
  if (inputNameEl.value === "") {
    outputNameEl.textContent = "Anonymous";
  } else {
    outputNameEl.textContent = inputNameEl.value;
  }
});
