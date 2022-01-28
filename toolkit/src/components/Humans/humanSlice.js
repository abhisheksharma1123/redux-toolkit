import { createSlice, nanoid } from "@reduxjs/toolkit";
const createHuman = (name) => ({
  id: nanoid(),
  name,
  Humanids: [],
});
const initialState = [createHuman("Abhishek"), createHuman("Namit")];
export const humanSlice = createSlice({
  name: "humans",
  initialState,
  reducers: {
    add: (state, action) => {
      // see mutable logic underneath, thanks to immer
      const human = createHuman(action.payload);
      state.push(human);
    },
  },
});
export const { add } = humanSlice.actions;
export default humanSlice.reducer;
