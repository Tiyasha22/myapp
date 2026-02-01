import { useState } from "react";
import "../App.css";
const TodoList = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleClick = () => {
    const item = {
      id: tasks.length + 1,
      task: input.trim(),
      isCompleted: false,
    };
    if (input.trim() !== "") {
      setTasks((prev) => [...prev, item]);
      setInput("");
    }
  };
  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };
  const toggleCompleted = (id) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          return { ...t, isCompleted: !t.isCompleted };
        } else return t;
      })
    );
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Add Task here"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.isCompleted}
              onChange={() => toggleCompleted(t.id)}
            />
            <span className={t.isCompleted ? "lineThrough" : ""}>{t.task}</span>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
