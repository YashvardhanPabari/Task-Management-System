import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/taskSlice";
import styles from "./TaskInput.module.css";

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask({ title, date }));
      setTitle("");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleAddTask} className={styles.form}>
      <div>
        <label>Task: </label>
        <input
          className={styles.taskInput}
          type="text"
          placeholder="So what's into your mind today"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <input
          type="date"
          placeholder="Enter Deadline"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit" className={styles.addBtn}>
          Add
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
