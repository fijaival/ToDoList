import React from 'react';
import styled from 'styled-components';


const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
  background-color: #ff6347;
  font: bold;
`
const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`
const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  color: white;
  border-bottom: ${props => props.focused ? '4px solid white' : 'none' };
`

const Header = ({tab, setTab}) => {
  return (
    <Container>
      <HeaderUl>
        <HeaderLi focused={tab === "list"} onClick={() => setTab("list")}>残りのタスク</HeaderLi>
        <HeaderLi focused={tab === "completed"} onClick={() => setTab("completed")}>完了したタスク</HeaderLi>
      </HeaderUl>
    </Container>
  )
}

export default Header
