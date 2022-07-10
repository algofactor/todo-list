import React, { useEffect, useRef, useState} from "react";
import { FaCheckCircle, FaTimesCircle, FaEdit } from "react-icons/fa";

function Todo({ todos, todo, setTodos }) {
	const [edit, setEdit] = useState(false);
	const [editValue, setEditValue] = useState(todo.text);
	const editRef = useRef(null);

	useEffect(() => {
        edit && editRef.current.focus();
    }, [edit]);

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

	const handleKeyPress = (e, id) => {
		if (e.keyCode === 13) {
			handleSubmit(id);
		}
	};

	return (
		<form onSubmit={(e) => e.preventDefault()} className={todo.completed ? "todo-item completed" : "todo-item"}>
			{edit && !todo.completed ? (
				<div className="edit-todo-group">
					<input
						type='text'
						onChange={handleEdit}
						value={editValue}
						ref={editRef}
						className='edit-input'
						onKeyDown={(e) => handleKeyPress(e, todo.id)}
					/>
					<button onClick={() => handleSubmit(todo.id)} type='submit'>
						<span className='icon'>
							<FaCheckCircle />
						</span>
					</button>
				</div>
			) : (
				<>
					<p>{todo.text}</p>
					<div className="icon-group">
						<button onClick={completeTodo} type='submit'>
							<span className='icon'>
								<FaCheckCircle />
							</span>
						</button>
						<button onClick={deleteTodo} type='submit'>
							<span className='icon'>
								<FaTimesCircle />
							</span>
						</button>
						<button type='submit' onClick={editTodo}>
							<span className='icon'>
								<FaEdit />
							</span>
						</button>
					</div>
				</>
			)}
		</form>
	);
}

export default Todo;
