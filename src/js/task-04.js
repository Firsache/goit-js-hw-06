// Створи змінну counterValue, в якій буде зберігатися
//  поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй
//  або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = document.querySelector("#value");
counterValue.textContent = 0;

const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);

const increaseCounterValue = (evt) => {
  counterValue.textContent = +counterValue.textContent + 1;
};

const decreaseCounterValue = (evt) => {
  counterValue.textContent = +counterValue.textContent - 1;
};

decrementBtnEl.addEventListener("click", decreaseCounterValue);
incrementBtnEl.addEventListener("click", increaseCounterValue);
