import { useState } from "react";

export default function TodoList() {
	const [todos, setTodos] = useState<Item[]>([]);
	const [input, setInput] = useState<string>("");

	interface Item {
		id: number;
		text: string;
		completed: boolean;
	}

	function handleToggle(id: number) {
		setTodos(
			todos.map((todo) => {
				if (todo.id !== id) {
					return todo;
				}
				return { ...todo, completed: !todo.completed };
			})
		);
	}

	function handleClick() {
		const newTodo: Item = { id: Date.now(), text: input, completed: false };
		setTodos([...todos, newTodo]);
		setInput("");
	}

	return (
		<>
			<div className="container">
				<div className="window">
					<h1 className="title">Todo List</h1>
					<ul className="todos">
						{todos.map((todo) => (
							<li
								className="todo"
								key={todo.id}
								onClick={() => {
									handleToggle(todo.id);
								}}
								style={{ textDecoration: todo.completed ? "line-through" : "none" }}
							>
								{todo.text}
							</li>
						))}
					</ul>
					<div className="text-input-group">
						<input className="text-input" value={input} type="text" placeholder=" " onChange={(element) => setInput(element.currentTarget.value)} />
						<label className="text-input-label">Add Task</label>
					</div>
					<button className="button" type="button" onClick={handleClick}>
						Add
					</button>
				</div>
			</div>
		</>
	);
}
