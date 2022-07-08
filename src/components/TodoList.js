import React from 'react'
import Todo from './Todo'

function TodoList({todos, setTodos, edit, setEdit}) {
    return (
        <div className='todo-cover'>
            <ul className='todo-items'>
                {todos.map(e =>(
                    <Todo key={e.id} todo={e} todos={todos} setTodos={setTodos}  />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
