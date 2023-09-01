export function ToDoItem({ id, title, completed, toggleTodo, deleteTodo }) {
    return <li>
        <label>
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id, !completed)} /> {title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>
    </li>
}