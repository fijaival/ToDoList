import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 8px 16px;
     &:nth-child(n+2){
        border-top: 1px solid #d9d8de;
     } 
     cursor: pointer;
`
    

const Completed = ({compTodos}) => {
  return (
    <div>
      {
        compTodos.map((comptask, index) =>{
            return <Container key={index}>{comptask}</Container>
        })
      }
    </div>
  )
}

export default Completed


