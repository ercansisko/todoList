import React, {useState} from 'react'
import Form from '../components/Form';
import List from '../components/List';
import TodoContext from '../contexts/TodoContext';

function MainLayout() {
  const [items, setItems]=useState(['eat milk', 'buy bread', 'go shopping']);
  const mainHandleSubmit=(item)=>{
    setItems((prev)=>[...prev,item]);
  }
  const mainDeleteItem=(item)=>{
    setItems((prev)=>{
      let filteredItems=[...prev].filter((prevItem)=>prevItem!=item);
      return filteredItems;
    })
  }
  const mainHandleEditSubmit=(item,item1)=>{
    setItems((prev)=>{
      let arr=[...prev];
      let editedItemIndex=arr.indexOf(item1);
      arr[editedItemIndex]=item;
      return [...arr];
    });
  }
  
  return (
    <TodoContext.Provider value={{items,mainHandleSubmit,mainDeleteItem,mainHandleEditSubmit}}>
      <div className="container">
        <h2 className='baslik'>Get Things Done!</h2>
        <Form />
        <List />
      </div>
      </TodoContext.Provider >
  
  )
} 

export default MainLayout