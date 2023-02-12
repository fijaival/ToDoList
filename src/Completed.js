import React from 'react';

const Completed = ({compTodos}) => {
  return (
    <div>
      {
        compTodos.map((comptask, index) =>{
            return <div key={index}>{comptask}</div>
        })
      }
    </div>
  )
}

export default Completed


