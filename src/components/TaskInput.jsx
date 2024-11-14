import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/taskSlice";

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title.trim()) {
      dispatch(addTask(title));
      setTitle("");
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
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskInput;
