const list = document.querySelector('#categories');

console.log('Number of categories: ', list.length);

[...list.children].forEach(el => {
  console.log('Category:', el.firstElementChild.textContent);
  console.log('Element:', el.lastElementChild.length);
  console.log(el);
});

// categiEl.forEach(el =>
//   console.log('Category:', el.firstElementChild.textContent),
// );

// console.log(categiEl);
