// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
//  і кількість елементів в категорії(усіх < li >, вкладених в нього).

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const listEl = document.querySelectorAll('#categories >li');
console.log(`Number of categories: ${listEl.length}`);

// const list = document.querySelector('#categories');
// console.log(list.firstChild);

const titleListItemOne = document.querySelector('.item > h2')
console.log(titleListItemOne);
const elementsListItemOne = document.querySelectorAll('.item > li')
console.log(elementsListItemOne);