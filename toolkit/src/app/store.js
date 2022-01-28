import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/Counter/counterSlice";
import taskReducer from "../components/Tasks/taskSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer,
  },
});
