import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
const options = {
  // the below name property will automatically be taken by type prop in action
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
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

const counterSlice = createSlice(options);
// createSlice method returns an object and contains several properties such as .actions, .reducer
export const { increment, incrementByAmount, decrement } = counterSlice.actions;
export default counterSlice.reducer;
