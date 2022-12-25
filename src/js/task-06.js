// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті,
//     зазначається в його атрибуті data - length.

// Якщо введена правильна кількість символів,
//     то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS - класи valid і
// invalid, які ми вже додали у вихідні файли завдання.

const userInputEl = document.querySelector("#validation-input");
const symbolsNumber = document.querySelector('input[data-length="6"]');

//console.log(symbolsNumber.dataset.length);
//console.log(typeof(symbolsNumber.dataset.length));

const validationUserInput = (evt) => {
  if (userInputEl.value.length < Number(symbolsNumber.dataset.length)) {
    //userInputEl.style.borderColor = 'red';

    if (userInputEl.classList.contains("valid")) {
      userInputEl.classList.replace("valid", "invalid");
    } else {
      userInputEl.classList.add("invalid");
    }
  } else {
    if (userInputEl.classList.contains("invalid")) {
      userInputEl.classList.replace("invalid", "valid");
    } else {
      userInputEl.classList.add("valid");
    }
    //userInputEl.style.borderColor = 'green';
  }
};

userInputEl.addEventListener("blur", validationUserInput);
