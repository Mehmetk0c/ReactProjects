import TodoForm from "./components/TodoForm";
import {useState} from "react";
import TodoList from "./components/TodoList";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {

  const [todos,setTodos]=useState([])
  const delTodo=(idx)=>{
      setTodos(todos.filter((todo,index)=>index!==idx))
    }
  

  return (
    <div className="App">
    <TodoForm todos={todos} setTodos={setTodos}></TodoForm>
    <TodoList todos={todos} delTodo={delTodo}></TodoList>

    </div>
  );
}

export default App;
