import { useState } from "react";
import { nanoid } from "nanoid";

export default function TaskForm(props) {
  const [task, setTask] = useState("");

  function handleTaskChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      task: task,
      done: false,
      id: nanoid()
    };
    props.addTask(newTask);

    //Rest title and artist
    setTask("");
  }

  return (
    <div className="add">
      <h3>Add A Task</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            placeholder="Add new task"
            type="text"
            onChange={handleTaskChange}
            value={task}
          />
        </label>
        <button className="button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
