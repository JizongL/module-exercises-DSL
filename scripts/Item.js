'use strict';


const Item = (function(){
  
  const Item = {};
  function validateName(name){
    if(!name){
      throw 'Name does not exist';
    }
  }
  function create(name){
    return {id:cuid(),name:name, checked:false};
  }
  return{
    Item:Item,
    validateName:validateName,
    create:create

  };
}());

console.log(Item);
