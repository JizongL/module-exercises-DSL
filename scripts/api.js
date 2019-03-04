
'use strict';
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/JizongL';

  function listApiFetch(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          // Valid HTTP response but non-2xx status - let's create an error!
          error = { code: res.status };
        }
  
        // In either case, parse the JSON stream:
        return res.json();
      })
  
      .then(data => {
        // If error was flagged, reject the Promise with the error object
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
  
        // Otherwise give back the data as resolved Promise
        return data;
      });
  }

  function getItems(){
    //return Promise.resolve('A successful response!');
    //return fetch(BASE_URL+'/items');
    return listApiFetch(BASE_URL + '/items');
  }

  function createItem(name){
    let newItem = {name:name};
    let option = {
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(newItem)
    };

    //return fetch(BASE_URL+'/items',option);
    return listApiFetch(BASE_URL + '/items',option);
  }

  function updateItem(id,updateData){
    
    let option = {
      method:'PATCH',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(updateData)
    };
    //return fetch(`${BASE_URL}/items/${id}`,option);
    return listApiFetch(`${BASE_URL}/items/${id}`,option);
  }

  function deleteItem(id){
    let option = {
      method:'DELETE',
      headers:{'Content-Type': 'application/json'},
    };
    return fetch(`${BASE_URL}/items/${id}`,option);
  }
  return{
    listApiFetch:listApiFetch,
    getItems:getItems,
    createItem:createItem,
    updateItem:updateItem,
    deleteItem:deleteItem
  };

}());