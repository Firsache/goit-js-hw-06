// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

for (let ingredient of ingredients) {
  const listEl = document.createElement('li');

  listEl.textContent = ingredient;
  listEl.classList.add('item');

  list.append(listEl);
}


// ========================================================
// //This variant didn't work


// const createIngredient = ingredient => {
//   const listItem = document.createElement('li');

//   listItem.textContent = ingredient;
//   listItem.classList.add("item");
//   return 'listItem';
// }

// const createIngredientsListEl = ingredients.map(createIngredient).join("");

// list.insertAdjacentHTML('afterbegin', createIngredientsListEl);
