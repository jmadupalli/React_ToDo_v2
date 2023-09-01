import { useState, useEffect } from "react";
import "./styles.css";
import { TodoForm } from "./TodoForm";
import { ToDoList } from "./ToDoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localVal = localStorage.getItem("Items");
    if (localVal == null) return []
    return JSON.parse(localVal);
  });

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(todos));
  }, [todos])

  const addTodo = (title) => {
    setTodos((current) => {
      return [...current, { id: crypto.randomUUID(), title, completed: false }]
    })
  }

  const toggleTodo = (id, completed) => {
    setTodos((current) => {
      return current.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  const deleteTodo = (id) => {
    setTodos((current) => {
      return current.filter((todo) => todo.id !== id)
    })
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <h1 className="header">ToDo List</h1>
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>);
}
