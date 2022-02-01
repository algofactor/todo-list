import React from 'react'

function Form({input, setInput, todos, setTodos}) {

    const getInputData =(e)=>{
        setInput(e.target.value)
    }

    const listTodos =(e)=>{
        e.preventDefault();
        // if (!e.text || /^\s*$/.test(e.text)) {
        //     return;
        // }
        setTodos([
            ...todos, {text: input, completed: false, id: Math.random() * 1000}
        ])
        setInput("")
    }
    
    return (
        <div className='todo-form-container'>
            <form className='todo-form'>
                <input onChange={getInputData} type="text" placeholder='Add a todo' value={input} />
                <button onClick={listTodos} type='submit'>Add todo</button>
            </form>
            
        </div>
    )
}

export default Form
