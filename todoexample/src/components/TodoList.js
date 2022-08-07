import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos,delTodo}) {

  return (
    <div className='todocontainer'>
        {
            todos.map((todo,id)=>(
                <TodoItem id={id} todo={todo} key={id} delTodo={delTodo}>

                </TodoItem>
            ))
        }
    </div>
  )
}

export default TodoList