import { useState } from "react";

const TaskSearch = ({ onSearch }) => {
  const [searchTerm, setSeachTerm] = useState("");

  const handleSearchChange = (e) => {
    setSeachTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
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
