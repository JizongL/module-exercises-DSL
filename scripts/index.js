/* global shoppingList, cuid */
/* global store, cuid */
/* global Item, cuid api*/
// eslint-disable-next-line no-unused-vars
'use strict';

$(document).ready(function() {

  //shoppingList.render();
  shoppingList.bindEventListeners();
  //shoppingList.render();



  // function addErrorToStoreAndRender(error){
  //   store.error = error;
  //   shoppingList.render();
  // }
  
  api.getItems()
    .then(data => shoppingList.addDataToStoreAndRender(data))
    .catch(err => shoppingList.addErrorToStoreAndRender(err.message));
    // .then(res => 
    
    //   // const item = store.items[0];
    //   // console.log('current name: ' + item.name);
    //   // store.findAndUpdate(item.id, { name: 'foobar' });
    //   // console.log('new name: ',res.json());
    //   // because there is additional terms inside this resolved promise
    //   // res.json() need to be returned, if not, it won't load the data
    //   // properly.
    //   res.json()
    // )
  
    
  
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