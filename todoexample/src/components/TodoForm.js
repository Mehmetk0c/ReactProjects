import React from 'react'
import { useState,useEffect } from 'react'
import {toast} from 'react-toastify'


export const TodoForm = ({setTodos,todos}) => {

    
    const [todoVal,setTodoVal]=useState('')

    const handleSubmit =(e)=>{

        if(todoVal==''){
            return -1
        }
        else if(todos.includes(todoVal))
        {
            toast.error('Zaten Ekli!')
            return -1
        }

        setTodos([...todos,todoVal])
        console.log(todos)

    }

    const Click=(e)=>{
        e.preventDefault();
        handleSubmit()
        setTodoVal('')

    }
  
  
    return (

    <form action='' id='todo-form'>
        <input type='text' 
        id='forminput'
        placeholder='Enter Your Todo'
        value={todoVal}
        onChange={(e)=>setTodoVal(e.target.value)}></input>

        <button id="add-buton" onClick={Click}>+</button>


    </form>
  );
}
export default TodoForm;