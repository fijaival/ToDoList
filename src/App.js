import TodoList from './TodoList';
import { useState } from 'react';
// import styled from 'styled-components';
import Header from './Header';
import Completed from './Completed';

function App() { 
  const [tab, setTab] = useState("list");
  const [todos, setTodos] = useState([]);
  const [compTodos, setCompTodos] = useState([]);

  const addCompTask = (comp) => {
      setCompTodos((prevCompTodos) => [...prevCompTodos, comp[0].name]);
      // setCompTodos(compTodos)
      setTab("completed")
      // console.log(compTodos)
      // console.log(comp[0].name)
      // console.log(compTodos)
  };

  return (
    <div >
      <Header tab={tab} setTab={setTab}/>
      {/* <div>{compTodos}</div> */}
      {
        tab === "list" ? 
        <TodoList todos={todos} setTodos={setTodos} addCompTask={addCompTask}/>: 
        <Completed
         compTodos={compTodos}
         />
      }
    </div>
  );
}

export default App;
