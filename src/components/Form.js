import React, {useRef, useEffect} from 'react'

function Form({input, setInput, todos, setTodos}) {

    const getInputData =(e)=>{
        setInput(e.target.value)
    }

    const listTodos =(e)=>{
        e.preventDefault();
        if (!input) {
            return;
        }
        setTodos([
            ...todos, {text: input, completed: false, id: Math.random() * 1000}
        ])
        setInput("")
    }

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    
    return (
        <div className='todo-form-container'>
            <form className='todo-form'>
                <input onChange={getInputData} ref={inputRef} type="text" placeholder='Add a todo' value={input} />
                <button onClick={listTodos} type='submit'>Add todo</button>
            </form>
            
        </div>
    )
}

export default Form
