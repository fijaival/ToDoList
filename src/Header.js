import React from 'react'

const Header = ({tab, setTab}) => {
  return (
    <div>
      <ul>
        <li focused={tab === "list"} onClick={() => setTab("list")}>今日やること</li>
        <li focused={tab === "completed"} onClick={() => setTab("completed")}>完了したタスク</li>
      </ul>
    </div>
  )
}

export default Header
