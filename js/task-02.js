const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const listItems = ingredients.map(el => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = el;
  return listItem;
});

listItems.forEach(el => {
  list.appendChild(el);
});
console.log(list);
