import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../features/taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li>
      <div
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={handleToggle}
      >
        <span>{`Task: ${task.title}`}</span>
        <span>{`Deadline: ${task.date}`}</span>
        <button onClick={handleDelete}>X</button>
      </div>
    </li>
  );
};

export default TaskItem;
