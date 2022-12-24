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
//==========================================================================================
//                        Final answer


const listElements = document.querySelectorAll('#categories >li');
console.log(`Number of categories: ${listElements.length}`);
for (let elem of listElements) {
    console.log(`Category: ${elem.querySelector('h2').textContent}\nElements: ${ elem.querySelectorAll('li').length }`)
}










//(ideas for searching via selectors)
// const titleListItemOne = document.querySelector('.item > h2')
// console.log(titleListItemOne);
// const elementsListItemOne = document.querySelectorAll('.item > li')
// console.log(elementsListItemOne);