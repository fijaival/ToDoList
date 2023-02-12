import React from 'react';
import styled from 'styled-components';


const ListItem = styled.div`
    padding: 8px 16px;
     &:nth-child(n+2){
        border-top: 1px solid #d9d8de;
     }
    `

const Todo = ({todo, toggleTodo}) => {
    const handleTodoClick = () => {
        toggleTodo(todo.id)
    };
    
    return (
        <ListItem>
            <label>
                <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={handleTodoClick}/>
            </label>
            {todo.name}
        </ListItem>
    )
}

export default Todo
