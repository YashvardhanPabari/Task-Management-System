import { useState } from "react";
import styles from "./TaskSearch.module.css";

const TaskSearch = ({ onSearch }) => {
  const [searchTerm, setSeachTerm] = useState("");

  const handleSearchChange = (e) => {
    setSeachTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ borderRadius: "5px", border: "none" }}
      />
    </div>
  );
};

export default TaskSearch;
