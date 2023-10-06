import Task from "./Task";
import TaskForm from "./TaskForm";
import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
  }

  function removeTask(item) {
    const updatedTasks = tasks.filter(function (task) {
      return task.id !== item.id;
    });

    setTasks(updatedTasks);
  }

  function toggleDone(item) {
    const updatedTasks = tasks.map(function (task) {
      if (task.id === item.id) {
        task.done = !task.done;
        return task;
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            remove={removeTask}
            toggleDone={toggleDone}
          />
        ))}
      </ul>
      <TaskForm addTask={addTask} />
    </div>
  );
}
