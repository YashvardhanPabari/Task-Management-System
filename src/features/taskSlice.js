import { createSlice } from "@reduxjs/toolkit";
import {
  loadTaskfromLocalStorage,
  saveTasksToLocalStorage,
} from "../utilities/localStorage";

const initialState = loadTaskfromLocalStorage();

const taskSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { title, date } = action.payload;
      state.push({
        id: Date.now(),
        title,
        date,
        completed: false,
      });
      saveTasksToLocalStorage(state);
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasksToLocalStorage(state);
      }
    },
    deleteTask: (state, action) => {
      const updatedState = state.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(updatedState);
      return updatedState;
    },
  },
});

export const { addTask, toggleTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
