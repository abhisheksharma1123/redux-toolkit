import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/Counter/counterSlice";
import taskReducer from "../components/Tasks/taskSlice";
import humanReducer from "../components/Humans/humanSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer,
    humans: humanReducer,
  },
});
