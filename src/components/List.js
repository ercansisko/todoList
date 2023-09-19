import React, {useContext} from 'react';
import TodoContext from '../contexts/TodoContext';
import ListItem from './ListItem';

function List() {
  const {items}=useContext(TodoContext);
  return (
    <ul>
        {
          items.map(item=>(
            <ListItem item={item} />
          ))
        }
    </ul>
  )
}

export default List