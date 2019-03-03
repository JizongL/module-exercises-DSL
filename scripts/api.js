
'use strict';
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/JizongL';

  function getItems(){
    //return Promise.resolve('A successful response!');
    return fetch(BASE_URL+'/items');
  }

  function createItem(name){
    let newItem = {name:name};
    let option = {
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(newItem)
    };

    return fetch(BASE_URL+'/items',option);
  }

  function updateItem(id,updateData){
    
    let option = {
      method:'PATCH',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(updateData)
    };
    return fetch(`${BASE_URL}/items/${id}`,option);
  }

  return{
    getItems:getItems,
    createItem:createItem,
    updateItem:updateItem
  };

}());