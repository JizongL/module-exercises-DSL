'use strict';
const item = (function(){
  const foo = 'foo';
  const Item = {};
  return{
    Item:Item
  };
}());

console.log(item);
console.log(foo);