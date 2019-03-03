/* global shoppingList, cuid */
/* global store, cuid */
/* global Item, cuid api*/
// eslint-disable-next-line no-unused-vars
'use strict';

$(document).ready(function() {

  shoppingList.render();
  shoppingList.bindEventListeners();
  shoppingList.render();
});

api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });

api.getItems()
  .then(res => res.json())
  .then((items) => {
    const item = items[1];
    return api.updateItem(item.id, { name: 'foobar' });
  })
  .then(res => res.json())
  .then(() => console.log('updated!'));


// api.createItem('pears')
//   .then(res => res.json())
//   .then((newItem) => {
//     return api.getItems();
//   })
//   .then(res => res.json())
//   .then(((items) => {
//     console.log(items);
//   }));

// api.getItems()
//   .then(res=>res.json())
//   .then(resJson=> console.log(resJson));

