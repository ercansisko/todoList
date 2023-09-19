import React, {useContext, useState} from 'react';
import TodoContext from '../contexts/TodoContext';

function ListItem({item}) {
    const {mainDeleteItem,mainHandleEditSubmit}=useContext(TodoContext);
    const [editMode,setEditMode]=useState(false);
    const [editValue,setEditValue]=useState();
    const deleteItem=()=>{
        mainDeleteItem(item);
    }
    const editItem=(e)=>{
        setEditMode(true);
        setEditValue(e.target.parentElement.parentElement.children[0].innerHTML);
    }
    const handleEditSubmit=(e)=>{
        setEditMode(false);
        mainHandleEditSubmit(e.target.children[0].value,editValue);
      }
  return (
    
        <li>
            {!editMode?(<div className="card">
              <div className="card-body">{item}</div>
              <div className="fonts">
              <i onClick={editItem} className="fa-solid fa-pen-to-square"></i>
              <i onClick={deleteItem} className="fa-solid fa-trash"></i>
              </div>
            </div>):(
            <form onSubmit={handleEditSubmit} className='formelement'>
          <input type="text" placeholder='What is the task today'/>
          <button type='submit'>Add Task</button>
        </form>
        )}
            
        </li>
  )
}

export default ListItem 