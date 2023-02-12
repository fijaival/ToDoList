import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';
import { Button } from './Button';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Input = styled.input`
font-size: 18px;
border-radius: 3px;
padding: 4px 8px;
border: 1px solid black;
display: inline;

`
const Label = styled.label`
    display: flex;
    color: #757575;
    font-size: 14px; 
    font-weight: bold; 
`
const ButtonContainer =styled.div`
    margin-top: 24px;
`

const TodoList = ({todos, setTodos, addCompTask}) => {
  const todoNameRef = useRef();
  const handleAddTodo = () =>{
    //タスクを追加する
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id:uuidv4(), name:name, completed: false}]
    });
    todoNameRef.current.value = null;
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    const compTodos = todos.filter((todo) => todo.completed);
    setTodos(newTodos);
    addCompTask(compTodos);
    // console.log(compTodos[0].name);

  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo =  newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const submitForm = (e) =>{
    e.preventDefault();
    };

  return (
  <div>
    <Label>今日のタスクあと{todos.filter((todo) => !todo.completed).length}こ</Label>
    <div>
      {todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>)}
    </div>
    <form onSubmit={submitForm}>
      <Input type="text" ref={todoNameRef}></Input>
      <Button onClick={handleAddTodo}>タスクを追加</Button>

      <ButtonContainer></ButtonContainer>
      <div>
        <Button onClick={handleClear}>完了したタスクの削除</Button>
      </div>
    </form>
      
    

  </div> 
 
 
  )
}

export default TodoList;
