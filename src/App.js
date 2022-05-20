import React, { useState } from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [input, setInput] = useState("")
  const [todos,setTodos] = useState([])
  const [edit, setEdit] = useState(false);

  return (
    <div className="todo-app">
        <div className="todo-container">
            <h1>What's the Plan Today</h1>
            <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos ={setTodos} edit={edit} setEdit={setEdit}  />
        </div>
    </div>
  );
}

export default App;
