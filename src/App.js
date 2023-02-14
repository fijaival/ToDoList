import TodoList from './TodoList';
import { useState } from 'react';
import Header from './Header';
import Completed from './Completed';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
`

function App() { 
  const [tab, setTab] = useState("list");
  const [todos, setTodos] = useState([]);
  const [compTodos, setCompTodos] = useState([]);

  const addCompTask = (comp) => {
      comp.forEach((name) => {
          setCompTodos((compTodos) => [...compTodos, [name][0].name]);
      })
      // setTab("completed") ;
  };


  return (
    <Container>
      <Header tab={tab} setTab={setTab}/>

      {
        tab === "list" ? 
        <TodoList todos={todos} setTodos={setTodos} addCompTask={addCompTask}/>: 
        <Completed
         compTodos={compTodos}
         />
      }
    </Container>
  );
}

export default App;
