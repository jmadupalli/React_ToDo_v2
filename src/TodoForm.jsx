import { useState } from "react";

export function TodoForm({ addTodo }) {
    const [newItem, setNewItem] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(newItem);
        setNewItem("");
    }
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"></input>

            </div>
            <button className="btn">Add</button>
        </form>
    )
}