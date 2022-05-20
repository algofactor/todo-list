import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaEdit } from "react-icons/fa";
// import Form from './Form'

function Todo({ todos, todo, setTodos, edit, setEdit }) {
	const [editValue, setEditValue] = useState(todo.text);
	// const inputRef = useRef(null);

	const deleteTodo = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
	};

	const completeTodo = () => {
		setTodos(
			todos.map((el) => {
				if (el.id === todo.id) {
					return {
						...el,
						completed: !todo.completed,
					};
				}
				return el;
			})
		);
	};

	const editTodo = () => {
		setEdit(!edit);
	};

	const handleEdit = (e) => {
		setEditValue(e.target.value);
	};

	const handleSubmit = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, text: editValue } : todo
			)
		);
		setEdit(false);
	};

    const handleKeyPress = (e, id) =>{
        if(e.keyCode === 13){
            handleSubmit(id)
        }
    }

	return (
		<li className={todo.completed ? "todo-item completed" : "todo-item"}>
			{edit ? (
				<input
					onChange={handleEdit}
					type='text'
					className='edit-input'
					value={editValue}
                    onKeyDown={(e) => handleKeyPress(e, todo.id)}
				/>
			) : (
				<p>{todo.text}</p>
			)}
			{edit ? (
				<button onClick={() => handleSubmit(todo.id)} type='submit'>
					<FaCheckCircle />
				</button>
			) : (
				<div>
					<button onClick={completeTodo} type='submit'>
						<FaCheckCircle />
					</button>
					<button onClick={deleteTodo} type='submit'>
						<FaTimesCircle />
					</button>
					<button type='submit' onClick={editTodo}>
						<FaEdit />
					</button>
				</div>
			)}
		</li>
	);
}

export default Todo;
