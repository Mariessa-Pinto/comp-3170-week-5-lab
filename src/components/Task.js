export default function Task(props) {
  function handleDelete() {
    props.remove(task);
  }

  function handleStatusChange() {
    props.toggleDone(task);
  }

  const task = props.task;

  return (
    <li className="task">
      <div className="task-details">
        <p>
          <span className="taskNameCheck">
            <input
              type="checkbox"
              checked={task.done}
              onChange={handleStatusChange}
              value={task.done}
            />
            {task.done ? <del>{task.task}</del> : task.task}
          </span>
        </p>
      </div>
      <div>
        <button className="removeButton" onClick={handleDelete}>
          Remove
        </button>
      </div>
    </li>
  );
}
