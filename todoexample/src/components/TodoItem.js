import React from 'react'

const TodoItem = ({todo,delTodo,id}) => {



return (
<div id='todo-item'>
    <p>{todo}</p>
    <button id="del-btn" onClick={()=>delTodo(id)}>X</button> 

</div>
  )
}

export default TodoItem