import { createSlice } from "@reduxjs/toolkit";

const ThirdModalData = createSlice({
  initialState: {},
  name: "ThirdModal",
  reducers: {
    SecomdModal: (state, action) => {
      return action.payload;
    },
  },
});

// export the reducers and the action.. these are the actions
export const { ThirdModal } = ThirdModalData.actions;
export default ThirdModalData.reducer;
