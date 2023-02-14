import React from 'react';
import styled from 'styled-components';


const ListItem = styled.div`
    width: 60%;
    padding: 0.5em 1em;
    margin: 1em 0;
    background: #f4f4f4;
    border-left: solid 6px #ff6347;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.33);
    `

const Label = styled.label`
    cursor: pointer;
`

const Todo = ({todo, toggleTodo}) => {
    const handleTodoClick = () => {
        toggleTodo(todo.id)
    };
    
    return (
        <ListItem>
            <Label>
                <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={handleTodoClick}/>
                {todo.name}
            </Label>
        </ListItem>
    )
}

export default Todo
