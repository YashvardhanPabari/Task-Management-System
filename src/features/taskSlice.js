import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "taskList",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const { title, date } = action.payload;
      state.push({
        id: Date.now(),
        title,
        date,
        completed: false,
      });
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
