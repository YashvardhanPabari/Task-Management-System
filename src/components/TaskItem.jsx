import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../features/taskSlice";
import styles from "./TaskItem.module.css";

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
        className={`${styles.item} ${task.completed ? styles.completed : ""}`}
        onClick={handleToggle}
      >
        <span>{`${task.title}`}</span>
        <span>{`${task.date}`}</span>
        <button onClick={handleDelete}>X</button>
      </div>
    </li>
  );
};

export default TaskItem;
