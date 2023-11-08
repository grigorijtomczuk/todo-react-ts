import { useState } from "react";

export default function TodoList() {
	const [todos, setTodos] = useState<TodoListItem[]>([]);
	const [input, setInput] = useState<string>("");

	// Populate the list
	// useEffect(() => {
	// 	const newTodos: Array<TodoListItem> = [];
	// 	for (let index = 1; index <= 30; index++) {
	// 		const newTodo: TodoListItem = { id: index, text: `List Item #${index}`, completed: false };
	// 		newTodos.push(newTodo);
	// 	}
	// 	setTodos([...todos, ...newTodos]);
	// }, []);

	interface TodoListItem {
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
		const newTodo: TodoListItem = { id: Date.now(), text: input, completed: false };
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
								style={{
									textDecoration: todo.completed ? "line-through 2px" : "none",
									color: todo.completed ? "#999999" : "inherit",
								}}
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
