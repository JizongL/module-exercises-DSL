/* global shoppingList, cuid */
/* global store, cuid */
/* global Item, cuid api*/
// eslint-disable-next-line no-unused-vars
'use strict';

$(document).ready(function() {

  //shoppingList.render();
  shoppingList.bindEventListeners();
  //shoppingList.render();




  api.getItems()
    .then(res => 
    
      // const item = store.items[0];
      // console.log('current name: ' + item.name);
      // store.findAndUpdate(item.id, { name: 'foobar' });
      // console.log('new name: ',res.json());
      // because there is additional terms inside this resolved promise
      // res.json() need to be returned, if not, it won't load the data
      // properly.
      res.json()
    )
  
    .then((items) => {
      
      items.forEach((item) => store.addItem(item));
      console.log('test-index.js inside api.getItems',store.items);
      $('.js-shopping-list').empty();
      shoppingList.render();
    });
  
});
// test code, obselete 
// test api.updateitem() method 

// api.getItems()
//   .then(res => res.json())
//   .then((items) => {
//     const item = items[1];
//     return api.updateItem(item.id, { name: 'foobar',checked:true });
//   })
//   .then(res => res.json())
//   .then(() => console.log('updated!'));

// test api.createItem() method 

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