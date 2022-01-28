import { createSlice } from "@reduxjs/toolkit";

const options = {
  // the below name property will automatically be taken by type prop in action
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
};

export const counterSlice = createSlice(options);
// createSlice method returns an object and contains several properties such as .actions, .reducer
export const { increment, incrementByAmount, decrement } = counterSlice.actions;
export default counterSlice.reducer;
