'use strict';
/* global Item, cuid shoppingList api*/

const store = (function(){
 
  const items= [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm= '';
  const error ='';
  
  function findById(id){
      
    return store.items.find( item => item.id===id);
  }

  function addItem(name){
        
    // console.log('this is a test',items);
    this.items.push(name);
  }
      
    
  function findAndUpdate(id, newData){
    const foundItem = this.items.find(item=>item.id===id);
    // notice the arguments inside=> Object.assign(target,source);
    
    console.log('test findAndUpdate',newData,foundItem);
    Object.assign(foundItem,newData);
    console.log('after change',foundItem);
    // shoppingList.render() is important here, without calling it
    // it would not update the checked status. 
    shoppingList.render();
  }  
  //  function findAndToggleChecked(id){
  //     const foundItem =  this.findById(id);
  //     foundItem.checked  = !foundItem.checked;    
  //  }
     
  //  function findAndUpdateName (id,newName){
  //    try{
  //     Item.validateName(newName);
  //     this.findById(id).name = newName;       
  //    }catch(error){
  //     console.log('Cannot update name: {error.message}');
  //    }
  //  }


  function findAndDelete(id){
    const index = store.items.findIndex(item => item.id === id);
    store.items.splice(index, 1);
    shoppingList.render();
  } 

  function toggleCheckFilter(){  
    this.hideCheckedItems = !this.hideCheckedItems;
  }

  function setSearchTerm(val){
    this.searchTerm = val;
  }



  return{
    error:error,
    items: items,
    hideCheckedItems:hideCheckedItems,
    searchTerm:searchTerm,
    findById:findById,
    findAndUpdate:findAndUpdate,
    addItem:addItem,
    findAndDelete:findAndDelete,
    toggleCheckFilter:toggleCheckFilter,
    setSearchTerm:setSearchTerm
  };
}());

console.log(store);
