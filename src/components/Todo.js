import React from 'react'
import {FaCheckCircle, FaTimesCircle} from "react-icons/fa"
// import Form from './Form'

function Todo({todos, todo, setTodos,  edit, setEdit, setInput, input, key}) {

    const deleteTodo =()=>{
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeTodo =()=>{
        setTodos(todos.map(el =>{
            if(el.id === todo.id){
                return{
                    ...el, completed: !todo.completed
                }
            }
            return el;
        }))
    }

    // const updateTodo = (todoId, newValue)=>{
    //     setTodos(prev => prev.map(el => el.id === todoId ? newValue : el))
    // }

    // const submitUpdate =(value)=>{
    //     updateTodo(edit.id, value)
    //     console.log(value)
    //     setEdit({id: null, value:""})
    // }

    // if (edit.id) {
    //     return <Form edit={edit} submitUpdate={submitUpdate}/>
    // }


    return (
        <li className={todo.completed ? 'todo-item completed' : 'todo-item'}>
            <p>{todo.text}</p>
            <button onClick={completeTodo} type='submit'><FaCheckCircle /></button>    
            <button onClick={deleteTodo} type='submit'><FaTimesCircle /></button>    
            {/* <button onClick={()=> setEdit({id: todo.id, value: todo.text})} type='submit'><FaEdit /></button> */}
        </li>    
    )
}

export default Todo
