export const loadTaskfromLocalStorage = () => {
  try {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : []; // Parse saved tasks or return empty array if no tasks
  } catch (error) {
    console.error("Error loading tasks from local storage:", error);
    return [];
  }
};

export const saveTasksToLocalStorage = (tasks) => {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks as a string
  } catch (error) {
    console.error("Error saving tasks to local storage:", error);
  }
};
