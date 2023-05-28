const list = document.querySelector('#categories');

console.log('Number of categories: ', list.children.length);

[...list.children].forEach(el => {
  console.log('Category:', el.firstElementChild.textContent);
  console.log('Element:', el.lastElementChild.children.length);
});
