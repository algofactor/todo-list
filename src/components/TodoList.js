import React from 'react'
import Todo from './Todo'

function TodoList({todos, setTodos, edit, setEdit}) {
    return (
        <div>
            <ul className='todo-items'>
                {todos.map(e =>(
                    <Todo key={e.id} todo={e} todos={todos} setTodos={setTodos} edit={edit} setEdit={setEdit}  />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
