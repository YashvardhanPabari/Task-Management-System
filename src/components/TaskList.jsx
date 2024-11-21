import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { useState } from "react";
import TaskSearch from "./TaskSearch";
import styles from "./TaskList.module.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const [searchTerm, setSeachTerm] = useState("");

  const handleSearch = (term) => {
    setSeachTerm(term.toLowerCase());
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className={styles.taskList_container}>
      <div className={styles.taskSearch_container}>
        <TaskSearch onSearch={handleSearch} />
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
