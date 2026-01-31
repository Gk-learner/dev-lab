import React, { useState } from "react";
import "./kanbanBoard.css"
const columns = ["todo", "in-progress", "completed"];

export default function KanbanBoard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("")
  const [editingId, setEditingId] = useState(null)
  const [editingTitle, setEditingTitle] = useState('')

  const addTask = () => {
    if (!newTask.trim()) return;
    const task = {
      id: Date.now(),
      title: newTask.trim().charAt(0).toUpperCase() + newTask.trim().slice(1),
      status: "todo",
    }
    setTasks([...tasks, task])
    setNewTask("")
  };

  const moveTask = (id, direction) => {
    setTasks((prev) =>

      prev.map((task) => {
        if (task.id === id) {
          const currentIndex = columns.indexOf(task.status)
          const newIndex = direction === "right" ? currentIndex + 1 : currentIndex - 1;
          return { ...task, status: columns[newIndex] };
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  };

  const saveTitle = (id) => {
    if (!editingTitle.trim()) return;
    setTasks((prev) => 
      prev.map((task) =>
        task.id === id ? { ...task, title: editingTitle.trim() }
    
    : task))
  };

  return (
    <div>
      <h2>Kanban Board</h2>
      <input
        data-testid="task-input"
        placeholder="Enter task"
        value={newTask}
        className="inputBox"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        data-testid="add-task-button"
        className="addTaskBtn"
        onClick={addTask}
      >
        Add Task
      </button>
      <div className="kanban-board">
        {columns.map((col) => (
          <div key={col} className="column" style={{backgroundColor: col === "todo" ? "#6fb3ef" : col === "in-progress" ? "#fffacd" : "#98fb98"}} data-testid={`column-${col}`}>

            <h4>{col.replace("-", " ").toUpperCase()}</h4>

            {tasks.filter((task) => task.status === col)
              .map((task) => (
                <div key={task.id}
                  className="column-task"
                  data-testid={`task-${task.id}`}
                >
                  {editingId === task.id ? (
                    <input
                      autoFocus
                      data-testid={`task-title-edit-${task.id}`}
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                      onBlur={() => saveTitle(task.id)}
                      onKeyDown={(e) => e.key === "Enter" && saveTitle(task.id)} />
                  ) : (
                    <p data-testid={`task-title-${task.id}`}>{task.title}</p>
                  )}

                  <div className="task-buttons">
                    {col !== "todo" && (
                      <button
                        data-testid={`move-left-${task.id}`}
                        className="shiftBtn"
                        onClick={() => moveTask(task.id, "left")}
                      >
                        ⬅️
                      </button>
                    )}
                    {col !== "completed" && (
                      <button
                        data-testid={`move-right-${task.id}`}
                        className="shiftBtn"
                        onClick={() => moveTask(task.id, "right")}
                      >
                        ➡️
                      </button>
                    )}
                    <button
                      data-testid={`edit-button-${task.id}`}
                      onClick={() => {
                        setEditingId(task.id)
                        setEditingTitle(task.title)
                      }}
                      className="edit-button">
                      Edit
                    </button>
                    <button
                      data-testid={`delete-button-${task.id}`}
                      onClick={() => {
                        deleteTask(task.id)
                      }}
                      className="deleteBtn">
                      Delete</button>
                  </div>
                </div>
              ))}

          </div>
        ))}
      </div>
    </div>
  );
}
