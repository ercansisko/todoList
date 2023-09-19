import React, {useContext} from 'react';
import TodoContext from '../contexts/TodoContext';

function Form() {
  const {mainHandleSubmit}=useContext(TodoContext);
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(e.target.children[0].value);
    mainHandleSubmit(e.target.children[0].value);
    e.target.children[0].value='';
  }
  return (
        <form onSubmit={handleSubmit} className='formelement'>
          <input type="text" placeholder='What is the task today'/>
          <button type='submit'>Add Task</button>
        </form>
  )
}

export default Form