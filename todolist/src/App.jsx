
import { useState, useEffect } from "react";
import "./App.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  
  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task.trim(),
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTask("");
  };

  
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  
  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );

    if (editId === id) {
      setEditId(null);
      setEditText("");
    }
  };

  
  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = () => {
    if (editText.trim() === "") return;

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === editId
          ? { ...todo, text: editText.trim() }
          : todo
      )
    );

    setEditId(null);
    setEditText("");
  };

  
  const cancelEdit = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="todo-container">
      <h1>My Todo List</h1>

      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTodo();
          }}
        />

        <button className="add-btn" onClick={addTodo}>
          Add Task
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  className="edit-input"
                  value={editText}
                  onChange={(e) =>
                    setEditText(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveEdit();
                    if (e.key === "Escape") cancelEdit();
                  }}
                  autoFocus
                />

                <button
                  className="save-btn"
                  onClick={saveEdit}
                >
                  Save
                </button>

                <button
                  className="cancel-btn"
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span
                  className={`todo-text ${
                    todo.completed ? "completed" : ""
                  }`}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.text}
                </span>

                <button
                  className="edit-btn"
                  onClick={() => startEdit(todo)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="empty-message">
            Add new tasks.
        </p>
      )}
    </div>
  );
}

export default TodoList;
