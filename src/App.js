import TaskList from "./components/TaskList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Task Management App</h1>
      <TaskList />
    </div>
  );
}
