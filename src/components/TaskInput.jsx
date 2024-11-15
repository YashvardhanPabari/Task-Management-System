import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/taskSlice";

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (title.trim() && date.trim()) {
      dispatch(addTask({ title, date }));
      setTitle("");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleAddTask}>
      <label>Task: </label>
      <input
        type="text"
        placeholder="Enter Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        placeholder="Enter Deadline"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskInput;
