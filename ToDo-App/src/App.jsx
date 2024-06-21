import { useState } from "react";
import "./App.css";
import ToDoCreate from "./components/TodoCreate";
import ToDoList from "./components/TodoList";
import React from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId)=>{
setTodos([...todos.filter((todo)=>todo.id!=todoId)]);
 console.log(extractedArray)
  }

  console.log(todos);

  return (
    <div className="App">
      <div className="main">
        <ToDoCreate onCreateTodo={createTodo} />
        <ToDoList todos={todos} onRemoveTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
