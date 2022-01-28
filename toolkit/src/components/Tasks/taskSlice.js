import { createSlice, nanoid } from "@reduxjs/toolkit";
const createTask = (title) => ({
  id: nanoid(),
  title,
  complete: false,
  assignedTo: "",
});
// Make sure you see the above function returns us an object

const initialState = [
  createTask("Order more energy drinks"),
  createTask("Water the plants"),
];
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add: (state, action) => {
      // see mutable logic underneath, thanks to immer
      const task = createTask(action.payload);
      state.push(task);
    },
  },
});
export const { add } = taskSlice.actions;
export default taskSlice.reducer;
